export const formateDate = (date: Date) => {
  return Intl.DateTimeFormat('en-US', {
    day:  'numeric',
    year: 'numeric',
    month: 'long'
  }).format(new Date(date));
}