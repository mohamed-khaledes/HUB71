import { cn } from '@/utils/utils'

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
