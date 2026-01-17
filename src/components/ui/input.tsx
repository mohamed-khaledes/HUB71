import { cn } from '@/utils/utils'
import { useLocale } from 'next-intl'

export type TInput = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  parentClassName?: string
}

export const Input = ({
  label,
  className,
  parentClassName,
  required = false,
  ...props
}: TInput) => {
  const lang = useLocale()
  const placeholder = required ? props?.placeholder + '*' : props?.placeholder
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
          className
        )}
        {...props}
        placeholder={placeholder}
      />
    </div>
  )
}
