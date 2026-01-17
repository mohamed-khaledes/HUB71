import { useGetSessions } from './hooks'
import { SessionCard, SessionCardSkeleton } from './card'
import { motion, Variants } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'

const Upcoming = () => {
  const { data: sessions, isLoading } = useGetSessions()
  const t = useTranslations()
  const lang = useLocale()
  // Animation variants
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] // cubic-bezier easing
      }
    }
  }
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }
  if (!sessions?.upcoming?.length && !isLoading)
    return (
      <motion.h2
        className='text-4xl font-bold text-foreground mb-6'
        initial={{ opacity: 0, x: lang === 'ar' ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {t('No upcoming sessions available')}
      </motion.h2>
    )
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-100px' }}
      variants={sectionVariants}
    >
      <motion.div
        className='text-sm text-primary mb-2 uppercase font-semibold'
        initial={{ opacity: 0, x: lang === 'ar' ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {t('keep updated')}
      </motion.div>
      <motion.h2
        className='text-4xl font-bold text-foreground mb-6'
        initial={{ opacity: 0, x: lang === 'ar' ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {t('upcoming')}
      </motion.h2>

      {isLoading ? (
        <>
          <SessionCardSkeleton />
          <SessionCardSkeleton />
          <SessionCardSkeleton />
        </>
      ) : (
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-50px' }}
        >
          {sessions?.upcoming?.map((session, i) => (
            <SessionCard type='upcoming' key={i} session={session} />
          ))}
        </motion.div>
      )}
    </motion.div>
  )
}

export default Upcoming
