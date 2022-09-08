import { ReactNode } from 'react'

type Props = {
  contents: ReactNode
  sideber: ReactNode
}

export const Layout = ({ contents, sideber }: Props) => {
  return (
    <div className="bg-[#F1F5F9] pt-16 min-h-[100vh]">
      <div className="flex justify-center">
        <div className="w-[900px]">{contents}</div>
        <div className="ml-8">{sideber}</div>
      </div>
    </div>
  )
}
