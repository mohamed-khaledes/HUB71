export type TSession = {
  start: string
  end: string
  title: string
}
export type TSessions = {
  sessions: {
    upcoming: TSession[]
    previous: TSession[]
  }
}
