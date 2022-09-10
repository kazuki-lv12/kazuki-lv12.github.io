import { useGetBlogList } from 'config/microcms'
import { Link, useLocation } from 'react-router-dom'
import queryString from 'query-string'

export const App = (): JSX.Element => {
  const query = queryString.parse(useLocation().search)
  const { blogList, total, loading } = useGetBlogList(query['tag'] as string)

  if (loading) {
    return <div className="text-center">now loading...</div>
  }

  if (total !== 0) {
    return (
      <div>
        {blogList.map((blog) => {
          const date = blog.createdAt.slice(0, 10)

          return (
            <div
              key={blog.id}
              className="flex items-center rounded overflow-hidden shadow-lg py-2 px-4 bg-white mb-4"
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
      <Link to={'/'} className="no-underline text-blue-800">
        もどる
      </Link>
    </div>
  )
}
