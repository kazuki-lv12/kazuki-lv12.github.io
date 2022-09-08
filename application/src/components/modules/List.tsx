import { Link } from 'react-router-dom'
import { cssMyList } from '../my-style'

const microcmsTags = ['none', 'HTML', 'CSS', 'JavaScript', 'Node.JS', 'React']

export const List = () => {
  return (
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
  )
}
