"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getQueryToJson = void 0;
/**
 * url 相关函数
 */
/**
 * 获取地址栏的参数
 * @param {*} url
 * @returns
 */
var getQueryToJson = function getQueryToJson(url) {
  url = url || (typeof window !== 'undefined' ? window.location.href : '');
  var _pa = url.substring(url.indexOf('?') + 1);
  var _arrS = _pa.split('&');
  var _rs = {};
  for (var i = 0, _len = _arrS.length; i < _len; i++) {
    var pos = _arrS[i].indexOf('=');
    if (pos === -1) {
      continue;
    }
    var name_1 = _arrS[i].substring(0, pos);
    var value = decodeURIComponent(_arrS[i].substring(pos + 1));
    _rs[name_1] = value;
  }
  return _rs;
};
exports.getQueryToJson = getQueryToJson;