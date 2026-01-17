type PageParams<P = {}> = {
  params: Promise<{ locale: string | 'en' | 'ar' }> & P
}

type TLayoutProps = PageParams & { children: React.ReactNode }

type TErrors = {
  [key: string]: any
}
