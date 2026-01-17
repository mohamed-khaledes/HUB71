type PageParams<P = {}> = {
  params: Promise<{ locale: string }> & P
}

type TLayoutProps = PageParams & { children: React.ReactNode }

type TErrors = {
  [key: string]: any
}
