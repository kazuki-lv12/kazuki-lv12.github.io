import { createClient } from 'microcms-js-sdk'
import { useEffect, useState } from 'react'
import { Microcms, MicrocmsContents } from 'type/Microcms'

export const microcms = createClient({
  serviceDomain: 'kazuki-lv12',
  apiKey: "96f4c53896a34c98aebebb039ebd5339dcf8",
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
      ; (async () => {
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
export const useGetBlog = (id: string | null | undefined) => {
  const [blog, setBlog] = useState<MicrocmsContents | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    try {
      ; (async () => {
        const res = (await microcms.get({
          endpoint: 'blogs',
          queries: { ids: `${id}` },
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

/**
 * タグリストをまとめて何個あるのかを返す関数
 */
export const useGetTags = () => {
  type Tag = { [tag: string]: number; }
  type Tags = Array<Tag>

  const [tags, setTags] = useState<Tags>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    try {
      ; (async () => {
        const res = (await microcms.get({
          endpoint: 'blogs',
          queries: { fields: 'tag', limit: 10000 }
        })) as Microcms

        // オブジェクトで値をカウントする
        const count: Tag = {};

        for (var i = 0; i < res.contents.length; i++) {
          for (var j = 0; j < res.contents[i].tag.length; j++) {
            var tag = res.contents[i].tag[j];

            if (Object.keys(count).indexOf(tag) === -1) {
              count[tag] = 1;
            } else {
              count[tag] = count[tag] + 1;
            }
          }
        }

        // オブジェクトを配列に変換
        const tags: Tags = []

        for (const [key, value] of Object.entries(count)) {
          const tag: Tag = {}
          tag[key] = value

          tags.push(tag)
        }

        setTags(tags)
        setLoading(false)
      })()
    } catch {
      setTags([])
      setLoading(false)
    }
  }, [])

  return {
    tags,
    loading
  }
}