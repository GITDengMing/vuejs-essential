import moment from 'moment'

moment.locale('zh-cn')

export default function(value, ...rest) {
    //参数 ...rest 使用了剩余语法，我们使用它将一个不定数量的参数表示为一个数组
  const date = value

  if (moment(date).isValid()) {
    const key = rest.shift()

    if (typeof key === 'string') {
      switch (key) {
        case 'from':
          value = moment(date).from()

          const otherOpts = rest.shift()

          if (otherOpts && typeof otherOpts === 'object') {
            value = moment(date).startOf(otherOpts.startOf).from()
          }

          break
        default:
          value = moment(date).format(key)
      }
    }
  }

  return value
}