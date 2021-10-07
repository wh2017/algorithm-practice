export function swap(arr: number[], i: number, j: number) {
  const size = arr.length
  if (i < 0 || j < 0 || i >= size || j >= size) {
    throw new Error('index is illegal')
  }
  return [arr[i], arr[j]] = [arr[j], arr[i]]
}