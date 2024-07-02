import {format, isToday, isTomorrow, isYesterday, setDefaultOptions} from "date-fns";
import {uk} from 'date-fns/locale'

export function useDateFormat() {
  const text = date => {
    setDefaultOptions({ locale: uk })

    if (isToday(date)) {
      return 'today'
    }
    else if (isYesterday(date)) {
      return 'yesterday'
    }
    else if (isTomorrow(date)) {
      return 'tomorrow'
    }

    return format(date, "iiii, d MMMM yyyy")
  }

  return {
    text
  }
}
