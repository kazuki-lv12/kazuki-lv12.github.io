export type MicrocmsContents = {
  tag: Array<string>
  content: string
  digest: string
  title: string
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}

export type Microcms = {
  contents: Array<MicrocmsContents>
  totalCount: number
  offset: number
  limit: number
}
