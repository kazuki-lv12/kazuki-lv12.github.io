import { ReactNode } from 'react'
import { List } from './modules/List'

type Props = {
  contents: ReactNode
}

export const Layout = ({ contents }: Props) => {
  return (
    <div className="bg-[#F1F5F9] pt-16 min-h-[100vh]">
      <div className="flex justify-center">
        <div className="w-[900px]">{contents}</div>
        <div className="ml-8">
          <List />
        </div>
      </div>
    </div>
  )
}
