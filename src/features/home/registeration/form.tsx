'use client'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { useSubmitRegistration } from './hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRotateRight,
  faCheckCircle,
  faExclamationCircle
} from '@fortawesome/free-solid-svg-icons'
import { useLocale, useTranslations } from 'next-intl'

const RegistrationForm = () => {
  const t = useTranslations()
  const lang = useLocale()

  const {
    loading,
    formData,
    handleBlur,
    handleChange,
    handleSubmit,
    handleClearForm,
    errors,
    isSuccess,
    isError,
    error,
    touched,
    successTime
  } = useSubmitRegistration()

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
        // ease: [0.22, 1, 0.36, 1]
      }
    }
  }
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
      className={`col-span-3 lg:col-span-1 bg-white py-12 ${
        lang === 'ar' ? 'text-right' : 'text-left'
      }`}
    >
      <div className='container mx-auto px-4'>
        <div className='xl:max-w-md mx-auto bg-gray-50 rounded-lg shadow-lg p-4 lg:p-8'>
          <motion.div
            className='text-sm text-primary font-semibold mb-2 uppercase'
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('missUpcomingSessions')}
          </motion.div>
          <motion.h2
            className='text-4xl font-bold text-black'
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {t('register')}
          </motion.h2>
          <motion.h2
            className='text-4xl font-bold text-black mb-4'
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {t('youInterest')}
          </motion.h2>

          {/* Success Message */}
          {isSuccess && successTime && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className='mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-800'
            >
              <FontAwesomeIcon icon={faCheckCircle} className='text-green-600' />
              <span>{t('Registration submitted successfully!')}</span>
            </motion.div>
          )}

          {/* Error Message */}
          {isError && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className='mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-800'
            >
              <FontAwesomeIcon icon={faExclamationCircle} className='text-red-600' />
              <span>{error?.message || t('Error submitting registration. Please try again.')}</span>
            </motion.div>
          )}

          <form onSubmit={handleSubmit}>
            <div className='grid md:grid-cols-2 xl:grid-cols-1 gap-3'>
              <Input
                placeholder={t('firstName')}
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                onBlur={() => handleBlur('firstName')}
                disabled={loading}
                error={errors.firstName}
                touched={touched.firstName}
                required
              />

              <Input
                placeholder={t('lastName')}
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                onBlur={() => handleBlur('lastName')}
                disabled={loading}
                error={errors.lastName}
                touched={touched.lastName}
                required
              />

              <Input
                placeholder={t('email')}
                name='email'
                type='email'
                value={formData.email}
                onChange={handleChange}
                onBlur={() => handleBlur('email')}
                disabled={loading}
                error={errors.email}
                touched={touched.email}
                required
              />

              <Input
                placeholder={t('companyName')}
                name='companyName'
                value={formData.companyName}
                onChange={handleChange}
                onBlur={() => handleBlur('companyName')}
                disabled={loading}
                error={errors.companyName}
                touched={touched.companyName}
                required
              />

              <Input
                placeholder={t('job title')}
                name='jobTitle'
                value={formData.jobTitle}
                onChange={handleChange}
                onBlur={() => handleBlur('jobTitle')}
                disabled={loading}
                error={errors.jobTitle}
                touched={touched.jobTitle}
                required
              />

              <Input
                placeholder={t('companyWebsite')}
                name='companyWebsite'
                type='url'
                value={formData.companyWebsite}
                onChange={handleChange}
                onBlur={() => handleBlur('companyWebsite')}
                disabled={loading}
                error={errors.companyWebsite}
                touched={touched.companyWebsite}
                required
              />

              <Select
                placeholder={t('i am a')}
                name='gender'
                value={formData.gender}
                type='select'
                onChange={handleChange}
                onBlur={() => handleBlur('gender')}
                options={['Select', 'male', 'female']}
                disabled={loading}
                error={errors.gender}
                touched={touched.gender}
              />

              <Select
                placeholder={t('how did you hear about HUB71')}
                name='hearAboutHub'
                value={formData.hearAboutHub}
                onChange={handleChange}
                onBlur={() => handleBlur('hearAboutHub')}
                options={['Select', 'Social Media', 'News', 'Friend', 'Event', 'Other']}
                disabled={loading}
                error={errors.hearAboutHub}
                touched={touched.hearAboutHub}
              />

              <Input
                placeholder={t('interested in')}
                name='interestedIn'
                value={formData.interestedIn}
                onChange={handleChange}
                onBlur={() => handleBlur('interestedIn')}
                disabled={loading}
                error={errors.interestedIn}
                touched={touched.interestedIn}
                required
              />

              <Select
                placeholder={t('country of residence')}
                name='country'
                value={formData.country}
                onChange={handleChange}
                onBlur={() => handleBlur('country')}
                options={['Select', 'UAE', 'Saudi Arabia', 'Egypt', 'Jordan', 'Lebanon', 'Other']}
                disabled={loading}
                error={errors.country}
                touched={touched.country}
                required
              />
              <Checkbox
                name='agreeTerms'
                type='checkbox'
                checked={formData.agreeTerms}
                onChange={handleChange}
                label={t('agreeTerms')}
                disabled={loading}
                error={errors.agreeTerms}
                touched={touched.agreeTerms}
              />
            </div>

            <Button type={'submit'} className='w-full cursor-pointer' disabled={loading}>
              {loading ? (
                <>
                  <FontAwesomeIcon icon={faArrowRotateRight} className='animate-spin mr-2' />
                  {t('Submitting...')}
                </>
              ) : (
                t('submitBtn')
              )}
            </Button>

            <div className='text-center mt-4'>
              <button
                type='button'
                className='text-primary text-sm cursor-pointer hover:underline'
                onClick={handleClearForm}
                disabled={loading}
              >
                <FontAwesomeIcon icon={faArrowRotateRight} className='mr-2' />
                {t('clearForm')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  )
}

export default RegistrationForm
