import { useGetBlog } from 'config/microcms'
import { Link, useParams } from 'react-router-dom'

export const AppId = (): JSX.Element => {
  const { blog, loading } = useGetBlog(useParams()['*'])

  if (loading) {
    return <div>now loading...</div>
  }

  if (blog) {
    return (
      <div>
        <div className="bg-white p-4 rounded overflow-hidden shadow-lg">
          <h1 className="text-center mb-8">{blog?.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: `${blog?.content}`,
            }}
          />
        </div>
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
