import { motion, Variants } from 'framer-motion'
import { TSession } from './type'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { useLocale, useTranslations } from 'next-intl'
import { formatDateTime } from '@/utils/helpers'

export const SessionCard = ({
  session,
  type
}: {
  session: TSession
  type: 'upcoming' | 'previous'
}) => {
  const t = useTranslations()
  const lang = useLocale()
  const isUpcoming = type === 'upcoming'

  // Card entrance animation
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.02,
        boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        transition: { duration: 0.3 }
      }}
      className='bg-gray-50 border border-gray-200 rounded-lg p-6 mb-4 transition-shadow text-start'
    >
      <div className={`flex justify-between items-start flex-wrap gap-4 `}>
        <motion.div
          className={`w-full lg:max-w-[60%] ${lang === 'ar' ? 'text-right' : 'text-left'}`}
          initial={{ opacity: 0, x: lang === 'ar' ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <motion.div
            className={`${isUpcoming ? 'text-primary' : 'text-secondary-2'} text-sm font-bold mb-2`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <motion.span
              initial={{ rotate: -180, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='inline-block'
            >
              <FontAwesomeIcon icon={faCalendarDays} />
            </motion.span>{' '}
            {formatDateTime(session.start)} • {formatDateTime(session.end)}
          </motion.div>
          <motion.h3
            className='text-lg lg:text-2xl font-bold text-black mb-2'
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.35 }}
          >
            {session.title}
          </motion.h3>
        </motion.div>
        <motion.div
          className='shrink-0'
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant={isUpcoming ? 'secondary' : 'secondary2'}
            className='px-4 py-2 lg:px-6 lg:py-3'
          >
            {isUpcoming ? t('registerNow') : t('getRecording')}
          </Button>
        </motion.div>
      </div>
    </motion.div>
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
