import { cn } from '@/utils/utils'
import { ButtonHTMLAttributes, ReactNode } from 'react'

export const Button = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}: {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'secondary2' | 'success'
  className?: string
  [key: string]: any
}) => {
  const variants = {
    primary: 'bg-primary hover:bg-blue-700 text-white',
    secondary: 'bg-secondary hover:bg-[#f8856e]  text-white',
    secondary2: 'bg-secondary-2  hover:bg-[#95f8c1] text-white',
    success: 'bg-emerald-400 hover:bg-emerald-500 text-white'
  }

  return (
    <button
      className={cn(
        `px-6 py-3 rounded font-bold transition-colors  ${variants[variant]}`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: 'primary' | 'light'
  className?: string
  name?: string
}

export const IconButton = ({
  children,
  variant = 'primary',
  className,
  name = 'btn',
  ...props
}: IconButtonProps) => {
  const variants = {
    primary: 'bg-primary hover:bg-primary/90 text-foreground',
    light: 'bg-card dark:hover:bg-muted text-foreground border border-gray-300'
  }

  return (
    <button
      name=''
      className={cn(
        'h-11 w-11 sm:w-14 sm:h-14 flex items-center justify-center rounded-md font-bold transition-colors cursor-pointer',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
