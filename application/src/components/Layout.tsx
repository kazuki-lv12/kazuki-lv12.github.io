import { ReactNode } from 'react'
import { List } from './modules/List'

type Props = {
  contents: ReactNode
}

export const Layout = ({ contents }: Props) => {
  return (
    <div className="bg-[#F1F5F9] pt-4 min-h-[100vh]">
      <div className="flex justify-center p-2 flex-col md:flex-row">
        <div className="w-full md:w-[70vw] xl:w-[50vw] min-w-[300px] mb-6 md:mb-0">{contents}</div>
        <div className="md:ml-4">
          <List />
        </div>
      </div>
    </div>
  )
}
