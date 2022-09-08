import { Layout } from 'components/Layout'
import { List } from 'components/List'
import { useGetBlogList } from 'config/microcms'
import { Link } from 'react-router-dom'

export const App = (): JSX.Element => {
  const blogList = useGetBlogList()

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
        </>
      }
      sideber={<List />}
    />
  )
}
