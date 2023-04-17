/**
 * vue filter
 * 字符串截取方法
 */

export const strlen = function (len = 5) {
  return (value: string | number) => {
    if (!value) return ''
    value = typeof value === 'string' ? value : value.toString()
    return value.length > len ? value.slice(0, len) + '...' : value
  }
}
