'use client'
import { useLocale } from 'next-intl'
import Upcoming from './upcoming'
import Previous from './previous'

const SessionsSection = () => {
  const lang = useLocale()
  return (
    <div
      className={`col-span-5 lg:col-span-3 container mx-auto px-4 py-12 ${
        lang === 'ar' ? 'text-right' : 'text-left'
      }`}
    >
      <div className='gap-8'>
        {/* Upcoming Sessions */}
        <Upcoming />
        {/* Previous Sessions */}
        <Previous />
      </div>
    </div>
  )
}

export default SessionsSection
