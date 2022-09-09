import { useGetTags } from 'config/microcms'
import { Link } from 'react-router-dom'
import { cssMyList } from 'components/styles/list'

export const List = () => {
  const { tags } = useGetTags()

  return (
    <>
      <div className="flex flex-col rounded overflow-hidden shadow-lg">
        {tags.map((tag, index) => {
          return (
            <li key={index} className={`${cssMyList}`}>
              <Link
                to={`/?tag=${Object.keys(tag)}`}
                className="flex no-underline text-blue-800"
              >
                <p className="m-0 w-20"># {Object.keys(tag)}</p>
                <div>{Object.values(tag)}</div>
              </Link>
            </li>
          )
        })}
      </div>
    </>
  )
}
