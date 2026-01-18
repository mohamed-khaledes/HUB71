'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass,
  faPerson,
  faBars,
  faTimes,
  faHome,
  faCalendar,
  faInfoCircle,
  faEnvelope,
  faUsers
} from '@fortawesome/free-solid-svg-icons'
import { useRouter, usePathname } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import ThemeToggle from '../shared/theme-toggle'
import { motion, AnimatePresence } from 'framer-motion'
import { IconButton } from '../ui/button'

const Header = () => {
  const lang = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const switchLanguage = () => {
    const newLang = lang === 'en' ? 'ar' : 'en'
    const newPathname = pathname.replace(`/${lang}`, `/${newLang}`)
    router.push(newPathname)
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
    setIsSearchOpen(false) // Close search when opening sidebar
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
    setIsSidebarOpen(false) // Close sidebar when opening search
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Search query:', searchQuery)
    //my search logic here
    setIsSearchOpen(false)
    setSearchQuery('')
  }

  const navLinks = [
    { href: `/${lang}`, label: t('home'), icon: faHome },
    { href: `/${lang}/sessions`, label: t('sessions'), icon: faCalendar },
    { href: `/${lang}/about`, label: t('about'), icon: faInfoCircle },
    { href: `/${lang}/community`, label: t('community'), icon: faUsers },
    { href: `/${lang}/contact`, label: t('contact'), icon: faEnvelope }
  ]

  const sidebarVariants = {
    hidden: {
      x: lang === 'ar' ? '100%' : '-100%',
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 200
      }
    },
    exit: {
      x: lang === 'ar' ? '100%' : '-100%',
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  }

  const searchVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <>
      <header className='bg-background border-b border-gray-200 sticky top-0 z-50 shadow-sm'>
        <div className='container'>
          <div className='px-4 py-4 lg:py-6 flex justify-between items-center'>
            {/* Logo */}
            <Link href={`/${lang}`} className='text-3xl font-bold text-primary'>
              <Image
                loading='eager'
                src={'/assets/logo.png'}
                alt='HUB71 logo'
                width={150}
                height={40}
                className='w-24 sm:w-28 lg:w-32'
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <div className='hidden lg:flex items-start gap-3 xl:gap-4'>
              <Image
                src={'/assets/Group 38599.png'}
                alt='Partner logo'
                width={150}
                height={40}
                className='w-28 xl:w-32 h-14'
              />

              <IconButton className='text-white' variant='primary' onClick={switchLanguage}>
                {lang === 'en' ? 'عربى' : 'EN'}
              </IconButton>
              <ThemeToggle />
              <IconButton variant='light' onClick={toggleSearch}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='text-foreground text-xl' />
              </IconButton>
              <IconButton variant='light'>
                <FontAwesomeIcon icon={faPerson} className='text-foreground text-xl' />
              </IconButton>
              <IconButton variant='primary' onClick={toggleSidebar}>
                <FontAwesomeIcon
                  className='text-xl text-white'
                  icon={isSidebarOpen ? faTimes : faBars}
                />
              </IconButton>
            </div>

            {/* Mobile & Tablet Menu */}
            <div className='flex lg:hidden items-center gap-2 sm:gap-3'>
              <IconButton className='text-white' variant='primary' onClick={switchLanguage}>
                {lang === 'en' ? 'عربى' : 'EN'}
              </IconButton>
              <ThemeToggle />
              <IconButton variant='light' onClick={toggleSearch}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='text-foreground text-xl' />
              </IconButton>
              <IconButton variant='primary' onClick={toggleSidebar}>
                <FontAwesomeIcon
                  className='text-xl text-white'
                  icon={isSidebarOpen ? faTimes : faBars}
                />
              </IconButton>
            </div>
          </div>
        </div>
        {/* Search Bar Overlay */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              variants={searchVariants as any}
              initial='hidden'
              animate='visible'
              exit='exit'
              className='absolute top-full left-0 right-0 bg-background border-b border-gray-200 shadow-lg'
            >
              <div className='container px-4 py-4 lg:py-6'>
                <form onSubmit={handleSearch} className='max-w-3xl mx-auto'>
                  <div className='relative'>
                    <input
                      type='text'
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      placeholder={t('search')}
                      className={`w-full h-12 sm:h-14 px-4 sm:px-6 pr-12 sm:pr-14 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary text-foreground bg-background ${
                        lang === 'ar' ? 'text-right' : 'text-left'
                      }`}
                      autoFocus
                    />
                    <button
                      type='submit'
                      className='absolute top-1/2 -translate-y-1/2 right-3 sm:right-4 h-8 sm:h-10 w-8 sm:w-10 bg-primary hover:bg-primary/90 text-white rounded-md flex items-center justify-center transition-colors'
                    >
                      <FontAwesomeIcon icon={faMagnifyingGlass} className='text-sm sm:text-base' />
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleSidebar}
              className='fixed inset-0 bg-black/50 z-40'
            />

            {/* Sidebar */}
            <motion.div
              variants={sidebarVariants as any}
              initial='hidden'
              animate='visible'
              exit='exit'
              className={`fixed top-0 ${lang === 'ar' ? 'right-0' : 'left-0'} h-full w-full sm:w-80 lg:w-96 bg-background shadow-2xl z-50 overflow-y-auto`}
            >
              <div className='p-6'>
                {/* Sidebar Header */}
                <div className='flex justify-between items-center mb-8'>
                  <Image
                    src={'/assets/logo.png'}
                    alt='HUB71 logo'
                    width={120}
                    height={32}
                    className='w-28'
                  />
                  <button
                    onClick={toggleSidebar}
                    className='h-10 w-10 bg-primary rounded-full flex items-center justify-center transition-colors'
                  >
                    <FontAwesomeIcon icon={faTimes} className='text-white' />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className='space-y-2'>
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: lang === 'ar' ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={toggleSidebar}
                        className={`flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors group ${
                          pathname === link.href ? 'bg-primary/20 text-primary' : 'text-foreground'
                        } `}
                      >
                        <FontAwesomeIcon
                          icon={link.icon}
                          className={`text-xl ${pathname === link.href ? 'text-primary' : 'text-gray-500 group-hover:text-primary'}`}
                        />
                        <span className='text-lg font-medium'>{link.label}</span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Additional Info */}
                <div className='mt-8 pt-8 border-t border-gray-200 dark:border-gray-700'>
                  <Image
                    src={'/assets/Group 38599.png'}
                    alt='Partner logo'
                    width={100}
                    height={40}
                    className='w-full max-w-40'
                  />

                  <div className='mt-6 space-y-3'>
                    <button className='w-full flex items-center justify-center gap-3 h-12 border border-gray-300 hover:border-primary hover:bg-primary/5 rounded-lg transition-all'>
                      <FontAwesomeIcon icon={faPerson} className='text-foreground' />
                      <span className='text-foreground font-medium'>{t('profile')}</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
