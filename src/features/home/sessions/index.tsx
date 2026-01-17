'use client'
import { SessionCard, SessionCardSkeleton } from './card'
import { useFetchSessions } from './hooks'
import { useLocale, useTranslations } from 'next-intl'

const SessionsSection = () => {
  const t = useTranslations()
  const lang = useLocale()
  const { data: sessions, isLoading } = useFetchSessions()

  const upcomingSessions = sessions?.filter(s => s.type === 'upcoming') || []
  const previousSessions = sessions?.filter(s => s.type === 'previous') || []

  return (
    <div
      className={`col-span-3 lg:col-span-2 container mx-auto px-4 py-12 ${
        lang === 'ar' ? 'text-right' : 'text-left'
      }`}
    >
      <div className='gap-8'>
        {/* Upcoming Sessions */}
        <div>
          <div className='text-sm text-primary mb-2 uppercase font-semibold'>
            {t('keep updated')}
          </div>
          <h2 className='text-4xl font-bold text-black mb-6'>{t('upcoming')}</h2>

          {isLoading ? (
            <>
              <SessionCardSkeleton />
              <SessionCardSkeleton />
              <SessionCardSkeleton />
            </>
          ) : (
            upcomingSessions?.map(session => <SessionCard key={session.id} session={session} />)
          )}
        </div>

        {/* Previous Sessions */}
        <div className='mt-20'>
          <div className='text-sm text-primary mb-2 uppercase font-semibold'>
            {t('keep updated')}
          </div>
          <h2 className='text-4xl font-bold text-black mb-6'>{t('previous')}</h2>

          {isLoading ? (
            <>
              <SessionCardSkeleton />
              <SessionCardSkeleton />
              <SessionCardSkeleton />
            </>
          ) : (
            previousSessions?.map(session => <SessionCard key={session.id} session={session} />)
          )}
        </div>
      </div>
    </div>
  )
}

export default SessionsSection
