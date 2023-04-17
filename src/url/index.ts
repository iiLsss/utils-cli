/**
 * url 相关函数
 */

/**
 * 获取地址栏的参数
 * @param {*} url
 * @returns
 */
export const getQueryToJson = function (url: string) {
  url = url || (typeof window !== 'undefined' ? window.location.href : '')
  const _pa = url.substring(url.indexOf('?') + 1)
  const _arrS = _pa.split('&')
  const _rs: Record<string, string> = {}
  for (let i = 0, _len = _arrS.length; i < _len; i++) {
    const pos = _arrS[i].indexOf('=')
    if (pos === -1) {
      continue
    }
    const name = _arrS[i].substring(0, pos)
    const value = decodeURIComponent(_arrS[i].substring(pos + 1))
    _rs[name] = value
  }
  return _rs
}
