import { Layout } from 'components/Layout'
import { cssMyList } from 'components/my-style'
import { useGetBlog } from 'config/microcms'
import { Link, useLocation } from 'react-router-dom'

export const microcmsTags = [
  'none',
  'HTML',
  'CSS',
  'JavaScript',
  'Node.JS',
  'React',
]

export const AppId = (): JSX.Element => {
  const id = useLocation().pathname.replace('/', '')
  const blog = useGetBlog(id)

  return (
    <Layout
      contents={
        <>
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
        </>
      }
      sideber={
        <>
          <h3 className="text-center">tag list</h3>
          <div className="max-w-xs flex flex-col">
            {microcmsTags.map((tag, index) => {
              return (
                <li key={index} className={`${cssMyList}`}>
                  <Link to={`/?tag=${tag}`} className="no-underline">
                    {tag}
                  </Link>
                </li>
              )
            })}
          </div>
        </>
      }
    />
  )
}
