import { useGetBlogList } from 'config/microcms'
import { Link } from 'react-router-dom'

export const App = (): JSX.Element => {
  const blogList = useGetBlogList()

  return (
    <div>
      <h1 className="text-4xl text-center text-red-500">fafa</h1>
      <div className="">
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
    </div>
  )
}
