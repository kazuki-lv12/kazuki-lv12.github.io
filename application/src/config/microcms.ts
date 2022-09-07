import { createClient } from 'microcms-js-sdk'
import { useEffect, useState } from 'react'
import { Microcms, MicrocmsContents } from 'type/Microcms'

const microcms = createClient({
  serviceDomain: 'kazuki-lv12',
  apiKey: process.env.REACT_APP_MICROCMS_API_KEY || '',
})

/**
 * 
 */
export const useGetBlogList = () => {
  const [blogList, setBlogList] = useState<Array<MicrocmsContents>>([])

  useEffect(() => {
    try {
      ; (async () => {
        const res = (await microcms.get({
          endpoint: 'blogs',
        })) as Microcms

        setBlogList(res.contents)
      })()
    } catch {
      setBlogList([])
    }
  }, [])

  return blogList
}

/**
 * 
 */
export const useGetBlog = (id: string) => {
  const [blog, setBlog] = useState<MicrocmsContents | null>(null)

  useEffect(() => {
    try {
      (async () => {
        const res = await microcms
          .get({
            endpoint: 'blogs',
            queries: { ids: id }
          }) as Microcms

        setBlog(res.contents[0])
      })()
    } catch {
      setBlog(null)
    }
  }, [id])

  return blog
}