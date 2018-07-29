const isNumber = value => typeof value === 'number'
const isString = value => typeof value === 'string'
const isDate = value => toString.call(value) === '[object Date]'
const uppercase = string => isString(string) ? string.toUpperCase() : string
const padNumber = (num, digits, trim) => {
  let neg = ''
  if (num < 0) {
    neg = '-'
    num = -num
  }
  num = '' + num
  while (num.length < digits) {
    num = '0' + num
  }
  if (trim) {
    num = num.substr(num.length - digits)
  }
  return neg + num
}
const dateGetter = (name, size, offset, trim) => {
  offset = offset || 0
  return date => {
    let value = date['get' + name]()
    if (offset > 0 || value > -offset) {
      value += offset
    }
    if (value === 0 && offset === -12) {
      value = 12
    }
    return padNumber(value, size, trim)
  }
}
const dateStrGetter = (name, shortForm) => {
  return function(date, formats) {
    const value = date['get' + name]()
    const get = uppercase(shortForm ? ('SHORT' + name) : name)
    return formats[get][value]
  }
}
const DATE_FORMATS = {
  yyyy: dateGetter('FullYear', 4),
  yy: dateGetter('FullYear', 2, 0, true),
  y: dateGetter('FullYear', 1),
  MMMM: dateStrGetter('Month'),
  MMM: dateStrGetter('Month', true),
  MM: dateGetter('Month', 2, 1),
  M: dateGetter('Month', 1, 1),
  dd: dateGetter('Date', 2),
  d: dateGetter('Date', 1),
  HH: dateGetter('Hours', 2),
  H: dateGetter('Hours', 1),
  hh: dateGetter('Hours', 2, -12),
  h: dateGetter('Hours', 1, -12),
  mm: dateGetter('Minutes', 2),
  m: dateGetter('Minutes', 1),
  ss: dateGetter('Seconds', 2),
  s: dateGetter('Seconds', 1)
}
const DATE_FORMATS_SPLIT = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/
const NUMBER_STRING = /^-?\d+$/
export default function(date, format) {
  let text = ''
  let parts = []
  let fn, match
  if (isString(date)) {
    if (NUMBER_STRING.test(date)) {
      date = parseInt(date, 10)
    } else if (Date.parse(date)) {
      date = new Date(date)
    } else {
      return date
    }
  }
  if (isNumber(date)) {
    date = new Date(date)
  }
  if (!isDate(date)) {
    return date
  }
  while (format) {
    match = DATE_FORMATS_SPLIT.exec(format)
    if (match) {
      parts = parts.concat(match.slice(1))
      format = parts.pop()
    } else {
      parts.push(format)
      format = null
    }
  }
  parts.forEach(value => {
    fn = DATE_FORMATS[value]
    text += fn ? fn(date) : value.replace(/(^'|'$)/g, '').replace(/''/g, '\'')
  })
  return text
}
