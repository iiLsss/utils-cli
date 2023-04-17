"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testPromise = exports.testMap = exports.sum = exports.arr = void 0;
var testMap = new Map([[1, 1], [2, 2], [3, 3], [4, 4]]);
exports.testMap = testMap;
var arr = [1, 2, 34];
exports.arr = arr;
var testPromise = function testPromise() {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, 1000);
  });
};
exports.testPromise = testPromise;
var sum = function sum(a, b) {
  return a + b;
};
exports.sum = sum;