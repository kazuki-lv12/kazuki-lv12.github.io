export type MicrocmsContents = {
  category: any
  content: string
  createdAt: string
  eyecatch: any
  id: string
  publishedAt: string
  revisedAt: string
  title: string
  updatedAt: string
}

export type Microcms = {
  contents: Array<MicrocmsContents>
  totalCount: number
  offset: number
  limit: number
}