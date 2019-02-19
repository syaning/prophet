import dayjs from 'dayjs'

export default {
  date(date, format = 'YYYY-MM-DD HH:mm:ss') {
    return dayjs(date).format(format)
  }
}
