import z from 'zod'
import { TFormData } from './type'

// Validation schema
export const registrationSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  companyName: z.string().min(2, 'Company name is required'),
  jobTitle: z.string().min(2, 'Job title is required'),
  companyWebsite: z.string().url('Invalid URL').or(z.literal('')),
  gender: z.string().min(1, 'Please select a type'),
  hearAboutHub: z.string().min(1, 'Please tell us how you heard about HUB71'),
  interestedIn: z.string().min(2, 'Please specify your interest'),
  country: z.string().min(1, 'Please select your country'),
  agreeTerms: z.boolean().refine(val => val === true, 'You must agree to the terms')
})

export type ValidationErrors = Partial<
  Record<keyof TFormData | 'jobTitle' | 'userType' | 'interestedIn' | 'country', string>
>
