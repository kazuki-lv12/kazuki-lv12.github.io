import { createClient } from 'microcms-js-sdk'
import { useEffect, useState } from 'react'
import { Microcms, MicrocmsContents } from 'type/Microcms'

export const microcms = createClient({
  serviceDomain: 'kazuki-lv12',
  apiKey: process.env.REACT_APP_MICROCMS_API_KEY || '',
})

/**
 * 複数の blog を返す関数
 * - すべての blog を返します
 * - tag を指定することで該当する blog を返します
 */
export const useGetBlogList = (tag: string | null) => {
  const [total, setTotal] = useState<number>(0)
  const [blogList, setBlogList] = useState<Array<MicrocmsContents>>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    try {
      ;(async () => {
        if (tag) {
          const res = (await microcms.get({
            endpoint: 'blogs',
            queries: { filters: `tag[contains]${tag}` },
          })) as Microcms

          setBlogList(res.contents)
          setTotal(res.totalCount)
          setLoading(false)
        } else {
          const res = (await microcms.get({
            endpoint: 'blogs',
          })) as Microcms

          setBlogList(res.contents)
          setTotal(res.totalCount)
          setLoading(false)
        }
      })()
    } catch {
      setBlogList([])
      setLoading(false)
    }
  }, [tag])

  return {
    blogList,
    total,
    loading,
  }
}

/**
 * 単一の blog を返す関数
 * - id を指定して該当する blog を返します
 */
export const useGetBlog = (id: string) => {
  const [blog, setBlog] = useState<MicrocmsContents | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    try {
      ;(async () => {
        const res = (await microcms.get({
          endpoint: 'blogs',
          queries: { ids: id },
        })) as Microcms

        setBlog(res.contents[0])
        setLoading(false)
      })()
    } catch {
      setBlog(null)
      setLoading(false)
    }
  }, [id])

  return { blog, loading }
}
