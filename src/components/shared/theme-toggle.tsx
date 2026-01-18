'use client'

import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { IconButton } from '../ui/button'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark') {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    }
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    const dark = html.classList.toggle('dark')

    localStorage.setItem('theme', dark ? 'dark' : 'light')
    setIsDark(dark)
  }

  return (
    <IconButton name='theme-toggler' variant='light' onClick={toggleTheme}>
      {isDark ? (
        <FontAwesomeIcon icon={faSun} className='mx-auto text-xl' />
      ) : (
        <FontAwesomeIcon icon={faMoon} className='mx-auto text-xl' />
      )}
    </IconButton>
  )
}
