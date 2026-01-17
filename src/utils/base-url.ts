const isDevEnvironment = process.env.NODE_ENV === 'development'
export const base_url = isDevEnvironment
  ? process.env['NEXT_PUBLIC_BASE_URL_DEV']
  : process.env['NEXT_PUBLIC_BASE_URL']

// the base url
export const IS_DEV = process.env.NODE_ENV === 'development'
export const IS_LIVE = process.env.NODE_ENV === 'production'
export const APP_BASE_URL = IS_DEV
  ? process.env['NEXT_DEV_APP_URL']
  : IS_LIVE
    ? process.env['NEXT_LIVE_APP_URL']
    : ''
