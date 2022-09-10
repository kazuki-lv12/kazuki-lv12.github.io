import { Octokit } from 'octokit'
import { useState } from 'react'

type Props = {
  open: boolean
  handler: Function
}

export const Modal: Function = ({ open, handler }: Props) => {
  const [email, setEmail] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const onSubmit = async () => {
    if (email === '' || title === '' || message === '') {
      alert('必要な情報が入力されていません。')
      return
    }

    try {
      const octokit = new Octokit({
        auth: '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',
      })

      const res = await octokit.request('POST /repos/{owner}/{repo}/issues', {
        owner: 'kazuki-lv12',
        repo: 'kazuki-lv12.github.io',
        title: `title:${title}, email:${email}`,
        body: message,
      })

      if (res.status !== 201) {
        throw Error('error')
      }

      setEmail('')
      setTitle('')
      setMessage('')
      alert('メッセージを送信しました。')
    } catch {
      alert(
        'メッセージを送れませんでした。\nGithub Issue に直接書き込んでください。'
      )
    }
  }

  if (open) {
    return (
      <>
        <div
          onClick={() => handler()}
          className="fixed inset-0 z-10 modal-bg"
        />
        <div className="absolute inset-0">
          <div className="p-4 rounded-lg bg-white z-10 modal min-w-[280px] w-[35vw]">
            <h1 className="text-center">Contact Form</h1>
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="name@company.com"
              className="py-2 mb-4 input"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <label htmlFor="title" className="label">
              Title
            </label>
            <input
              id="title"
              placeholder="Title"
              className="py-2 mb-4 input"
              value={title}
              onChange={(e) => setTitle(e.currentTarget.value)}
            />
            <label htmlFor="message" className="label">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="py-2 mb-4 input"
              placeholder="Your message..."
              value={message}
              onChange={(e) => setMessage(e.currentTarget.value)}
            ></textarea>
            <div className="text-center">
              <button
                onClick={onSubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                SEND
              </button>
            </div>
            <p>
              ※ Github の issue に投稿されるため個人情報は書かないでください。
            </p>
            <p>
              Issue URL {` `}
              <a
                href="https://github.com/kazuki-lv12/kazuki-lv12.github.io/issues"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/kazuki-lv12/kazuki-lv12.github.io/issues
              </a>
            </p>
            <p>※ Email も公開されます。</p>
          </div>
        </div>
      </>
    )
  }

  return <div />
}
