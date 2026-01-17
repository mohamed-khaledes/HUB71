import { cn } from '@/utils/utils'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
export type TInput = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  parentClassName?: string
  error?: string
  touched?: boolean
}
export const Checkbox = ({ label, error, touched, parentClassName, ...props }: TInput) => {
  const t = useTranslations('validations')
  const hasError = error && touched
  return (
    <>
      <div className={cn('flex items-start mb-4', parentClassName)}>
        <input type='checkbox' className='mt-1 mr-2' {...props} />
        <label className='text-sm text-gray-700'>{label}</label>
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
    </>
  )
}
