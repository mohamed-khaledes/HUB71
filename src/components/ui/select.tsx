import { useLocale } from 'next-intl'

export const Select = ({ label, options, ...props }: any) => {
  const lang = useLocale()
  return (
    <div className='mb-4'>
      {label && <label className='block text-sm mb-2 text-gray-700'>{label}</label>}
      <select
        className={`w-full text-black px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 ${
          lang === 'ar' ? 'text-right' : 'text-left'
        }`}
        {...props}
      >
        {options.map((opt: string) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  )
}
