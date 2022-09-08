import { Layout } from 'components/Layout'
import { List } from 'components/List'
import { useGetBlogList } from 'config/microcms'
import { Link, useLocation } from 'react-router-dom'

export const App = (): JSX.Element => {
  const tag = useLocation().search.slice(5, 100) || null
  const { blogList, total, loading } = useGetBlogList(tag)

  if (loading) {
    return <Layout contents={<div>now loading...</div>} sideber={<List />} />
  }

  return (
    <Layout
      contents={
        <>
          {blogList.map((blog) => {
            return (
              <div key={blog.id}>
                <Link to={`/${blog.id}`}>
                  <h1>{blog.title}</h1>
                </Link>
              </div>
            )
          })}
          {total === 0 ? (
            <div className="text-center">
              <p>該当するアイテムが見つかりませんでした。</p>
              <Link to={'/'}>もどる</Link>
            </div>
          ) : null}
        </>
      }
      sideber={<List />}
    />
  )
}
