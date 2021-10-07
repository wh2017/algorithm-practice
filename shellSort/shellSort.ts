import { swap } from "../util.ts/swap"

export class ShellSort {
  /** 先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，
   * 待整个序列中的记录基本有序时，再对全体记录进行依次直接插入排序 */
  static shellSort(arr: number[]) {
    if (!arr.length) {
      return arr
    }

    for (let h = Math.floor(arr.length / 2); h >= 1; h = Math.floor(h / 2)) {
      for (let i = 0; i <= h; i++) {
        for (let j = i + h; j < arr.length; j += h) {
          // // way 1: 待比较元素
          // const temp = arr[j]
          // let k
          // // 待比较元素 < 前面元素，前面元素值放后面
          // for (k = j; k - h >= 0 && temp < arr[k - h]; k -= h) {
          //   arr[k] = arr[k - h]
          // }
          // // 待比较元素值放在正确位置
          // arr[k] = temp

          // way 2:
          for (let k = j; k - h >= 0; k -= h) {
            if (arr[k] < arr[k - h]) {
              swap(arr, k, k - h)
            } else {
              break
            }
          }
        }
      }

    }
    return arr
  }
}
const testArr = [3, 2, 6, 4, 7, 4, 9, 1, 0]
console.log(ShellSort.shellSort(testArr))