import { useGetTags } from 'config/microcms'
import { Link } from 'react-router-dom'
import { cssMyList } from '../my-style'

export const List = () => {
  const { tags } = useGetTags()

  return (
    <>
      <h3 className="text-center">tag list</h3>
      <div className="max-w-xs flex flex-col">
        {tags.map((tag, index) => {
          return (
            <li key={index} className={`${cssMyList}`}>
              <Link
                to={`/?tag=${Object.keys(tag)}`}
                className="flex no-underline"
              >
                <p className="m-0 w-20">{Object.keys(tag)}</p>
                <div>{Object.values(tag)}</div>
              </Link>
            </li>
          )
        })}
      </div>
    </>
  )
}
