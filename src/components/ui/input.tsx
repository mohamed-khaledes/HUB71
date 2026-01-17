import { cn } from '@/utils/utils'
import { useLocale, useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

export type TInput = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  parentClassName?: string
  error?: string
  touched?: boolean
}

export const Input = ({
  label,
  className,
  parentClassName,
  required = false,
  error,
  touched,
  ...props
}: TInput) => {
  const lang = useLocale()
  const t = useTranslations('validations')
  const placeholder = required ? props?.placeholder + '*' : props?.placeholder
  const hasError = error && touched

  return (
    <div className={cn('mb-2', parentClassName)}>
      {label && (
        <label className='block text-sm mb-1 text-gray-700'>
          {label} {required && <span className='text-red-600'>*</span>}
        </label>
      )}
      <input
        className={cn(
          `w-full px-4 py-3 border border-gray-300 rounded focus:outline-none text-black focus:border-blue-600 ${
            lang === 'ar' ? 'text-right' : 'text-left'
          }`,
          hasError && 'border-red-500',
          className
        )}
        {...props}
        placeholder={placeholder}
      />
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
