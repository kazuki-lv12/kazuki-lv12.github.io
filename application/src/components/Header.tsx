import githubIcon from 'assets/github.svg'
import chat from 'assets/chat.svg'
import { Link } from 'react-router-dom'

export const Header = (): JSX.Element => {
  return (
    <header className="flex items-center justify-around c-boder">
      <h1>
        <Link to={'/'} className="no-underline text-black">
          kazuki lv12
        </Link>
      </h1>
      <div className="flex">
        <a
          href="https://github.com/kazuki-lv12"
          target="_blank"
          rel="noreferrer"
          className="flex"
        >
          <img src={githubIcon} alt="github icon" />
        </a>
        <a
          href="https://github.com/kazuki-lv12/kazuki-lv12.github.io/issues"
          target="_blank"
          rel="noreferrer"
          className="flex ml-4"
        >
          <img src={chat} alt="github icon" />
        </a>
      </div>
    </header>
  )
}
