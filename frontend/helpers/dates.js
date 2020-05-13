import format from 'date-fns/format'

export function formatCalendarDate(utc) {
  return format(new Date(utc), 'MM/dd/yyyy')
}
