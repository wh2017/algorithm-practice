import { swap } from "../util.ts/swap"

export class InsertionSort {
  /** 每次将一个元素正确的插入到已排序序列中：在已排序序列中从后向前扫描，找到相应位置并插入 */
  static insertionSort(arr: number[]) {
    if (!arr.length) return arr
    for (let i = 0; i < arr.length; i++) {
      /** [0...i] 为已排序序列 */
      for (let j = i; j - 1 >= 0; j--) {
        if (arr[j] < arr[j - 1]) {
          swap(arr, j, j - 1)
        } else {
          break
        }
      }
    }
    return arr
  }
}

const testArr = [3, 2, 6, 4, 7, 9, 1, 4, 0]
console.log(InsertionSort.insertionSort(testArr))