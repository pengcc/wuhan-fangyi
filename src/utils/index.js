import each from 'lodash/each'
import isEmpty from 'lodash/isEmpty'
import isObject from 'lodash/isObject'
import isFunction from 'lodash/isFunction'
import mapValues from 'lodash/mapValues'
import moment from 'moment'
import 'moment/locale/zh-cn'

moment.locale('zh-cn')

export function params(data) {
  const finalData = {}
  each(data, (value, key) => {
    if (value !== undefined && value !== 'undefined') {
      finalData[key] = value
    }
  })
  if (isEmpty(finalData)) {
    return ''
  }
  return '?' + Object.keys(finalData).map(key => `${key}=${encodeURIComponent(finalData[key])}`).join('&')
}


export function fromImmutable(value) {
  if (isObject(value) && isFunction(value.toJS)) {
    return value.toJS()
  } else {
    return value
  }
}

export function allToJS(obj) {
  return mapValues(obj, fromImmutable)
}

export function formatDate({date, format}) {
  return moment(date).format(format || 'YYYY.MM.DD H:mm')
}
