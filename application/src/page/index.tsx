import { useGetBlogList } from 'config/microcms'
import { Link, useLocation } from 'react-router-dom'

export const App = (): JSX.Element => {
  const tag = useLocation().search.slice(5, 100) || null
  const { blogList, total, loading } = useGetBlogList(tag)

  if (loading) {
    return <div>now loading...</div>
  }

  if (total !== 0) {
    return (
      <div>
        <h1>トップページ</h1>
        {blogList.map((blog) => {
          return (
            <div key={blog.id}>
              <Link to={`/${blog.id}`}>
                <h1>{blog.title}</h1>
              </Link>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="text-center">
      <p>該当するアイテムが見つかりませんでした。</p>
      <Link to={'/'}>もどる</Link>
    </div>
  )
}
