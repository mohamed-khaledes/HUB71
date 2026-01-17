import z from 'zod'
import { TFormData } from './type'
import { api_registration } from './api'
import { FormEvent, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { registrationSchema, ValidationErrors } from './validation'

export const useSubmitRegistration = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [successTime, setSuccessTime] = useState<boolean>(true)
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [error, setError] = useState<any>(null)
  const [formData, setFormData] = useState<TFormData>({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    jobTitle: '',
    companyWebsite: '',
    hearAboutHub: '',
    interestedIn: '',
    country: '',
    gender: '',
    agreeTerms: false
  })

  const { mutate, isSuccess, isError } = useMutation({
    mutationFn: async (data: TFormData) => api_registration.registration(data),
    onMutate: () => {
      setLoading(true)
    },
    onSuccess: () => {
      setLoading(false)
      setErrors({})
      handleClearForm()
      setTimeout(() => {
        setSuccessTime(false)
      }, 3000)
    },
    onError: (err: any) => {
      setLoading(false)
      setError(err)
    }
  })

  // Validate single field
  const validateField = (name: string, value: any) => {
    try {
      const fieldSchema = registrationSchema.shape[name as keyof typeof registrationSchema.shape]
      if (fieldSchema) {
        fieldSchema.parse(value)
        setErrors(prev => ({ ...prev, [name]: undefined }))
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        // Get the first error message from the errors array
        const errorMessage = err.issues[0]?.message
        setErrors(prev => ({ ...prev, [name]: errorMessage }))
      }
    }
  }

  const handleBlur = (name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }))
    validateField(name, formData[name as keyof TFormData])
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | any) => {
    const { name, value, type } = e.target
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }))

    // Validate on change if field was already touched
    if (touched[name]) {
      validateField(name, newValue)
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Validate all fields
    try {
      registrationSchema.parse(formData)
      setErrors({})
      mutate(formData)
    } catch (err: any) {
      if (err instanceof z.ZodError) {
        const fieldErrors = err.flatten().fieldErrors
        const newErrors: ValidationErrors = {}
        // Iterate over the fieldErrors object
        Object.entries(fieldErrors).forEach(([field, messages]: any) => {
          if (messages && messages?.length > 0) {
            // Take the first error message for each field
            newErrors[field as keyof ValidationErrors] = messages[0]
          }
        })

        setErrors(newErrors)

        // Mark all fields as touched
        const allTouched: Record<string, boolean> = {}
        Object.keys(formData).forEach(key => {
          allTouched[key] = true
        })
        setTouched(allTouched)
      }
    }
  }

  const handleClearForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      companyName: '',
      jobTitle: '',
      companyWebsite: '',
      hearAboutHub: '',
      interestedIn: '',
      country: '',
      gender: '',
      agreeTerms: false
    })
    setErrors({})
    setTouched({})
  }

  return {
    loading,
    formData,
    handleBlur,
    handleChange,
    handleSubmit,
    handleClearForm,
    errors,
    isSuccess,
    isError,
    touched,
    error,
    successTime
  }
}
