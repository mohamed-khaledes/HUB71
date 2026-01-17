'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faPerson, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useRouter, usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'

const Header = () => {
  const lang = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const switchLanguage = () => {
    const newLang = lang === 'en' ? 'ar' : 'en'
    const newPathname = pathname.replace(`/${lang}`, `/${newLang}`)
    router.push(newPathname)
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='bg-white border-b border-gray-200 sticky top-0 z-50'>
      <div className='container'>
        <div className='px-4 py-6 flex justify-between items-center'>
          {/* Logo */}
          <div className='text-3xl font-bold text-primary'>
            <Image
              loading='eager'
              src={'/assets/logo.png'}
              alt='logo'
              width={150}
              height={40}
              className='w-32'
            />
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:block'>
            <div className='flex items-start gap-4'>
              <Image
                src={'/assets/Group 38599.png'}
                alt='logo'
                width={150}
                height={40}
                className='w-30'
              />

              <button
                onClick={switchLanguage}
                className='h-12 px-4 bg-primary text-white text-center text-sm rounded-md font-bold'
              >
                {lang === 'en' ? 'عربى' : 'EN'}
              </button>

              <button className='h-12 w-12 px-4 py-2 border border-gray-300 flex items-center justify-center rounded-md'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='text-black text-lg' />
              </button>

              <button className='h-12 w-12 px-4 py-2 border border-gray-300 flex items-center justify-center rounded-md'>
                <FontAwesomeIcon icon={faPerson} className='text-black text-lg' />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className='md:hidden h-12 w-12 px-4 py-2 bg-primary text-white flex items-center justify-center rounded-md'
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className='bg-white lg:hidden h-75 w-full left-0 px-4 pb-6 mt-2 absolute '>
            <div className='flex items-start justify-center gap-4'>
              <Image
                src={'/assets/Group 38599.png'}
                alt='logo'
                width={150}
                height={40}
                className='w-30'
              />

              <button
                onClick={switchLanguage}
                className='h-12 px-4 bg-primary text-white text-center text-sm rounded-md font-bold'
              >
                {lang === 'en' ? 'عربى' : 'EN'}
              </button>

              <button className='h-12 w-12 px-4 py-2 border border-gray-300 flex items-center justify-center rounded-md'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='text-black text-lg' />
              </button>

              <button className='h-12 w-12 px-4 py-2 border border-gray-300 flex items-center justify-center rounded-md'>
                <FontAwesomeIcon icon={faPerson} className='text-black text-lg' />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
