import { FormData } from "./type";

export const submitRegistration = async (data: FormData) => {
  // Simulate API call - Replace with your actual API endpoint
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log('Form submitted:', data);
  return { success: true };
};