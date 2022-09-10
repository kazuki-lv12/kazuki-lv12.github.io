import githubIcon from 'assets/github.svg'
import chat from 'assets/chat.svg'
import { Link } from 'react-router-dom'
import { Modal } from './modules/Modal'
import { useState } from 'react'

export const Header = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false)
  const handler = () => setOpen(!open)
  
  return (
    <>
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
            title="github"
            className="flex"
          >
            <img src={githubIcon} alt="github icon" />
          </a>
          <div className="flex ml-4" onClick={handler} title="contact form">
            <img src={chat} alt="contact icon" />
          </div>
        </div>
      </header>
      <Modal open={open} handler={handler} />
    </>
  )
}
