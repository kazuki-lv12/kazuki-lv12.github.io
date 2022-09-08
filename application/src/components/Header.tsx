import githubIcon from 'assets/github-icon.svg'
import { Link } from 'react-router-dom'

export const Header = (): JSX.Element => {
  return (
    <header className="flex items-center justify-around c-boder">
      <h1>
        <Link to={'/'} className="no-underline text-black">
          kazuki lv12
        </Link>
      </h1>
      <a href="https://github.com/kazuki-lv12">
        <img src={githubIcon} alt="github icon" />
      </a>
    </header>
  )
}
