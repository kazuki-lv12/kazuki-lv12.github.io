import { useGetBlog } from 'config/microcms'
import { Link } from 'react-router-dom'

export const AppId = (): JSX.Element => {
  const blog = useGetBlog('a9degboo1l')

  return (
    <div>
      <Link to={'/'}>
        <p>トップページへ</p>
      </Link>
      <h1>{blog?.title}</h1>
      <span
        dangerouslySetInnerHTML={{
          __html: `${blog?.content}`,
        }}
      />
    </div>
  )
}
