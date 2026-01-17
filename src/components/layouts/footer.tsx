'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Input } from '../ui/input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTiktok,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import { useLocale, useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations()
  const lang = useLocale()
  const [email, setEmail] = useState('')

  const handleSubscribe = () => {
    if (email) {
      console.log('Subscribe email:', email)
      alert('Thank you for subscribing!')
      setEmail('')
    }
  }

  return (
    <footer
      className={`bg-muted border-t border-gray-200 py-12 ${
        lang === 'ar' ? 'text-right' : 'text-left'
      }`}
    >
      <div className='container'>
        <Image
          loading='eager'
          src={'/assets/logo.png'}
          alt='logo'
          width={150}
          height={40}
          className='w-32 mb-4'
        />
        <div className='grid md:grid-cols-2 gap-12 mb-12'>
          <div>
            <h2 className='mb-6'>
              <span className='text-primary font-extralight text-5xl md:text-8xl'>{t('GET')}</span>
              <br />
              <span className='text-primary font-bold text-5xl md:text-8xl'>{t('IN TOUCH')}</span>
            </h2>
            <p className='text-lg uppercase font-extrabold text-foreground'>{t('SUBSCRIBE')}</p>
            <p className='text-lg mb-6 uppercase font-extrabold text-foreground'>
              {t('TO OUR NEWSLETTER')}
            </p>
            <div className='flex gap-2 relative w-full lg:w-[70%]'>
              <Input
                type='email'
                placeholder={t('Your email')}
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
                className='flex-1 px-4 py-3 border border-gray-300 rounded w-full text-foreground'
                parentClassName='w-full'
              />
              <span
                className={`absolute top-2.5 cursor-pointer hover:text-primary text-foreground ${lang == 'en' ? 'right-2' : 'left-2'}`}
              >
                {t('subscribeBtn')}
              </span>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-foreground'>
            <div>
              <h3 className='font-bold mb-4'>{t('startupJourney')}</h3>
              <ul className='space-y-4 uppercase text-[14px]'>
                <li>
                  <a href='#' className='hover:text-primary'>
                    {t('discoverHub71')}
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-primary'>
                    {t('ourPartners')}
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-primary'>
                    {t('events')}
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-primary'>
                    {t('agentTech')}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-bold mb-4'>{t('wantToInvest')}</h3>
              <ul className='space-y-4 uppercase text-[14px]'>
                <li>
                  <a href='#' className='hover:text-primary'>
                    {t('startups')}
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-primary'>
                    {t('startupCampus')}
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-primary'>
                    {t('programs')}
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-primary'>
                    {t('contactUs')}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-bold mb-4'>{t('whatsNew')}</h3>
              <ul className='space-y-4 uppercase text-[14px]'>
                <li>
                  <a href='#' className='hover:text-primary'>
                    {t('investors')}
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-primary'>
                    {t('latestNews')}
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-primary'>
                    {t('reports')}
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-primary'>
                    {t('registration')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='border-t text-foreground border-gray-200 pt-6 flex justify-between items-center text-sm flex-wrap gap-4'>
          <div className='flex gap-4'>
            <a href='#' className='hover:text-primary'>
              {t('privacyNotice')}
            </a>
            <a href='#' className='hover:text-primary'>
              {t('termsOfUse')}
            </a>
          </div>
          <div className='flex gap-4 text-[18px]'>
            <a href='#' className='hover:text-primary'>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href='#' className='hover:text-primary'>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href='#' className='hover:text-primary'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href='#' className='hover:text-primary'>
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href='#' className='hover:text-primary'>
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
