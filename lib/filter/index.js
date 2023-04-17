"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strlen = void 0;
/**
 * vue filter
 * 字符串截取方法
 */
var strlen = function strlen(len) {
  if (len === void 0) {
    len = 5;
  }
  return function (value) {
    if (!value) return '';
    value = typeof value === 'string' ? value : value.toString();
    return value.length > len ? value.slice(0, len) + '...' : value;
  };
};
exports.strlen = strlen;