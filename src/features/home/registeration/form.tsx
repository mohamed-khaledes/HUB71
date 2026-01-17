'use client'
import { useState } from 'react'
import { FormData } from './type'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { submitRegistration } from './hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons'
import { useLocale, useTranslations } from 'next-intl'

const RegistrationForm = () => {
  const t = useTranslations()
  const lang = useLocale()
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    companyWebsite: '',
    hearAbout: '',
    agreeTerms: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert('Please fill in all required fields')
      return
    }

    setIsSubmitting(true)
    try {
      await submitRegistration(formData)
      alert('Registration submitted successfully!')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        phoneNumber: '',
        companyWebsite: '',
        hearAbout: '',
        agreeTerms: false
      })
    } catch (error) {
      alert('Error submitting registration')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  return (
    <div
      className={`col-span-3 lg:col-span-1 bg-white py-12 ${
        lang === 'ar' ? 'text-right' : 'text-left'
      }`}
    >
      <div className='container mx-auto px-4'>
        <div className='xl:max-w-md mx-auto bg-gray-50 rounded-lg shadow-lg p-4 lg:p-8'>
          <div className='text-sm text-primary font-semibold mb-2 uppercase'>
            {t('missUpcomingSessions')}
          </div>
          <h2 className='text-4xl font-bold text-black'>{t('register')}</h2>
          <h2 className='text-4xl font-bold text-black mb-4'>{t('youInterest')}</h2>
          <div>
            <div className='grid md:grid-cols-2 xl:grid-cols-1 gap-3'>
              <Input
                placeholder={t('firstName')}
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />

              <Input
                placeholder={t('lastName')}
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />

              <Input
                placeholder={t('email')}
                name='email'
                type='email'
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />

              <Input
                placeholder={t('companyName')}
                name='companyName'
                value={formData.companyName}
                onChange={handleChange}
                disabled={isSubmitting}
              />

              <Input
                placeholder={t('job title')}
                name='job-title'
                value={formData.companyName}
                onChange={handleChange}
                disabled={isSubmitting}
                required
              />
              <Input
                placeholder={t('companyWebsite')}
                name='companyWebsite'
                type='url'
                value={formData.companyWebsite}
                onChange={handleChange}
                disabled={isSubmitting}
                required
              />

              <Select
                placeholder={t('i am a')}
                name='hearAbout'
                value={formData.hearAbout}
                onChange={handleChange}
                options={['Select', 'Social Media', 'News', 'Friend', 'Event', 'Other']}
                disabled={isSubmitting}
              />
              <Select
                placeholder={t('how did you hear about HUB71')}
                name='hearAbout'
                value={formData.hearAbout}
                onChange={handleChange}
                options={['Select', 'Social Media', 'News', 'Friend', 'Event', 'Other']}
                disabled={isSubmitting}
              />

              <Input
                placeholder={t('interested in')}
                name='phoneNumber'
                type='tel'
                value={formData.phoneNumber}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              <Select
                placeholder={t('country of residence')}
                name='hearAbout'
                value={formData.hearAbout}
                onChange={handleChange}
                options={['Select', 'Social Media', 'News', 'Friend', 'Event', 'Other']}
                disabled={isSubmitting}
              />
              <Checkbox
                name='agreeTerms'
                checked={formData.agreeTerms}
                onChange={handleChange}
                label={t('agreeTerms')}
                disabled={isSubmitting}
              />
            </div>
            <Button
              onClick={handleSubmit}
              className='w-full cursor-pointer'
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : t('submitBtn')}
            </Button>

            <div className='text-center mt-4'>
              <button type='button' className='text-primary text-sm cursor-pointer'>
                <FontAwesomeIcon icon={faArrowRotateRight} />
                {t('clearForm')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default RegistrationForm
