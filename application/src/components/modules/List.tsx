import { useGetTags } from 'config/microcms'
import { Link } from 'react-router-dom'

export const List = () => {
  const { tags } = useGetTags()

  return (
    <>
      <div className="flex flex-col mx-auto max-w-[300px]">
        {tags.map((tag, index) => {
          return (
            <div
              key={index}
              className="p-3 pl-3 rounded overflow-hidden shadow-lg bg-white mb-2"
            >
              <Link
                to={`/?tag=${Object.keys(tag)}`}
                className="flex no-underline text-blue-800"
              >
                <p className="m-0 w-full md:w-28"># {Object.keys(tag)}</p>
                <div>{Object.values(tag)}</div>
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}
