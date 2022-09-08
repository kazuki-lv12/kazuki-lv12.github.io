import { Layout } from 'components/Layout'
import { List } from 'components/List'
import { useGetBlog } from 'config/microcms'
import { Link, useLocation } from 'react-router-dom'

export const AppId = (): JSX.Element => {
  const id = useLocation().pathname.replace('/', '')
  const { blog, loading } = useGetBlog(id)

  if (loading) {
    return <Layout contents={<div>now loading...</div>} sideber={<List />} />
  }

  return (
    <Layout
      contents={
        <>
          {blog ? (
            <div>
              <p className="ml-4">
                <Link to={'/'}>トップページへ</Link>
              </p>
              <div className="bg-white p-4 rounded-xl mb-24">
                <h1 className="text-center mb-8">{blog?.title}</h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${blog?.content}`,
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p>該当するアイテムが見つかりませんでした。</p>
              <Link to={'/'}>もどる</Link>
            </div>
          )}
        </>
      }
      sideber={<List />}
    />
  )
}
