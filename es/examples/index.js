export var testMap = new Map([[1, 1], [2, 2], [3, 3], [4, 4]]);
export var arr = [1, 2, 34];
export var testPromise = function testPromise() {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, 1000);
  });
};
export var sum = function sum(a, b) {
  return a + b;
};