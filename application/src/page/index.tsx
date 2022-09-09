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
        {blogList.map((blog) => {
          const date = blog.createdAt.slice(0, 10)

          return (
            <div
              key={blog.id}
              className={`flex items-center rounded overflow-hidden shadow-lg p-4`}
            >
              <Link
                to={`/${blog.id}`}
                className="no-underline w-full text-black"
              >
                <h1>{blog.title}</h1>
                <p>{blog.digest.slice(0, 100)}</p>
                <div className="flex">
                  {blog.tag.map((tag, index) => {
                    return (
                      <p key={index} className="ml-2 text-blue-800">
                        # {tag}
                      </p>
                    )
                  })}
                  <p className="ml-auto">{date}</p>
                </div>
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
