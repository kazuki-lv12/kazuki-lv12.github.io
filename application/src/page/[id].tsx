import { useGetBlog } from 'config/microcms'
import { Link, useParams } from 'react-router-dom'

export const AppId = (): JSX.Element => {
  const { blog, loading } = useGetBlog(useParams()['*'])

  if (loading) {
    return <div className="text-center">now loading...</div>
  }

  if (blog) {
    return (
      <div>
        <div className="bg-white p-4 rounded overflow-hidden shadow-lg">
          <h1 className="text-center">{blog.title}</h1>
          <p className="text-end">投稿日 {blog.createdAt.slice(0, 10)}</p>
          <p className='text-end'>最終更新日 {blog.updatedAt.slice(0, 10)}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: `${blog.content}`,
            }}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="text-center">
      <p>該当するアイテムが見つかりませんでした。</p>
      <Link to={'/'} className="no-underline text-blue-800">もどる</Link>
    </div>
  )
}
