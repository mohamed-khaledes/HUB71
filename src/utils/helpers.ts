export const formatDateTime = (isoString: string) => {
  const date = new Date(isoString)

  if (isNaN(date.getTime())) return 'Invalid Date'

  // Date part: "29 Jul, 2025"
  const dateOptions: any = { day: '2-digit', month: 'short', year: 'numeric' }
  const datePart = new Intl.DateTimeFormat('en-GB', dateOptions).format(date)

  // Time part: "10:00"
  const timeOptions: any = { hour: '2-digit', minute: '2-digit', hour12: false }
  const timePart = new Intl.DateTimeFormat('en-GB', timeOptions).format(date)

  // Combine with the pipe separator
  return `${datePart} | ${timePart}`
}
