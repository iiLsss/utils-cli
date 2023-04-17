export const testMap = new Map([
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
])
export const arr = [1, 2, 34]
export const testPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000)
  })
}

export const sum = (a: number, b: number): number => {
  return a + b
}
