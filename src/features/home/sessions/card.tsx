import { Session } from './type'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { useLocale, useTranslations } from 'next-intl'

export const SessionCard = ({ session }: { session: Session }) => {
  const t = useTranslations()
  const lang = useLocale()
  const isUpcoming = session.type === 'upcoming'
  return (
    <div className='bg-gray-50 border border-gray-200 rounded-lg p-6 mb-4 hover:shadow-lg transition-shadow text-start'>
      <div
        className={`flex ${
          lang === 'ar' ? 'flex-row-reverse' : 'flex-row'
        } justify-between items-start flex-wrap gap-4 `}
      >
        <div className={`w-full lg:max-w-[60%] ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
          <div
            className={`${isUpcoming ? 'text-primary' : 'text-secondary-2'} text-sm font-bold mb-2`}
          >
            <FontAwesomeIcon icon={faCalendarDays} />
            {session.date} • {session.time}
          </div>
          <h3 className={`text-lg lg:text-2xl font-bold text-black mb-2  `}>{session.title}</h3>
        </div>
        <div className='shrink-0'>
          <Button
            variant={isUpcoming ? 'secondary' : 'secondary2'}
            className={`px-4 py-2 lg:px-6 lg:py-3`}
          >
            {isUpcoming ? t('registerNow') : t('getRecording')}
          </Button>
        </div>
      </div>
    </div>
  )
}

export const SessionCardSkeleton = () => (
  <div className='bg-white border border-gray-200 rounded-lg p-6 mb-4'>
    <div className='flex justify-between items-start'>
      <div className='flex-1'>
        <Skeleton className='h-4 w-32 mb-2' />
        <Skeleton className='h-6 w-3/4 mb-2' />
        <Skeleton className='h-4 w-full mb-1' />
        <Skeleton className='h-4 w-2/3' />
      </div>
      <Skeleton className='h-12 w-32 ml-4' />
    </div>
  </div>
)
