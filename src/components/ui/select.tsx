'use client'

import { motion } from 'framer-motion'
import { cn } from '@/utils/utils'
import { useLocale, useTranslations } from 'next-intl'
import { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export type TSelect = {
  type?: 'select'
  label?: string
  placeholder?: string
  options: string[]
  value?: string
  onChange?: (e: { target: { name: string; value: string } }) => void
  onBlur?: () => void
  name?: string
  disabled?: boolean
  className?: string
  parentClassName?: string
  error?: string
  touched?: boolean
  required?: boolean
}

export const Select = ({
  label,
  placeholder,
  options,
  value,
  onChange,
  onBlur,
  name,
  disabled,
  className,
  parentClassName,
  error,
  touched,
  required = false
}: TSelect) => {
  const lang = useLocale()
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)
  const hasError = error && touched
  const displayValue = value || placeholder || 'Select'
  const isPlaceholder = !value || value === 'Select'
  const t = useTranslations('validations')

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (option: string) => {
    if (onChange && option !== 'Select') {
      onChange({
        target: {
          name: name || '',
          value: option
        }
      })
    }
    setIsOpen(false)
  }

  const handleBlur = () => {
    if (onBlur) {
      onBlur()
    }
  }

  return (
    <div className={cn('mb-2', parentClassName)}>
      {label && (
        <label className='block text-sm mb-1 text-gray-700'>
          {label} {required && <span className='text-red-600'>*</span>}
        </label>
      )}

      <div ref={selectRef} className='relative'>
        <button
          type='button'
          onClick={() => !disabled && setIsOpen(!isOpen)}
          onBlur={handleBlur}
          disabled={disabled}
          className={cn(
            `w-full text-black px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 flex justify-between items-center ${
              lang === 'ar' ? 'text-right' : 'text-left'
            }`,
            isPlaceholder && 'text-gray-400',
            hasError && 'border-red-500',
            disabled && 'bg-gray-100 cursor-not-allowed',
            className
          )}
        >
          <span>{displayValue}</span>
          <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <FontAwesomeIcon icon={faChevronDown} className='text-sm' />
          </motion.span>
        </button>

        {isOpen && !disabled && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={cn(
              'absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto',
              lang === 'ar' ? 'text-right' : 'text-left'
            )}
          >
            {options.map((option, index) => (
              <button
                key={index}
                type='button'
                onClick={() => handleSelect(option)}
                className={cn(
                  'w-full px-4 py-3 text-black hover:bg-gray-100 transition-colors',
                  lang === 'ar' ? 'text-right' : 'text-left',
                  value === option && 'bg-blue-50 text-blue-600 font-semibold',
                  option === 'Select' && 'text-gray-400'
                )}
              >
                {option}
              </button>
            ))}
          </motion.div>
        )}
      </div>

      {hasError && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-red-500 text-xs mt-1'
        >
          {t(error)}
        </motion.p>
      )}
    </div>
  )
}
