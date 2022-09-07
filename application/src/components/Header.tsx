import githubIcon from 'assets/github-icon.svg'

export const Header = (): JSX.Element => {
  return (
    <header className="flex items-center justify-around c-boder">
      <h1>kazuki lv12</h1>
      <a href="https://github.com/kazuki-lv12">
        <img src={githubIcon} alt="github icon" />
      </a>
    </header>
  )
}
