import { swap } from "../util.ts/swap"

export class SectionSort {
  /** 每次查找剩下元素中最小的元素 */
  static sectionSort(arr: number[]) {
    if (!arr.length) return

    for (let i = 0; i < arr.length - 1; i++) {
      /** 最小值索引下标 */
      let minIndex = i
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j
        }
      }
      swap(arr, i, minIndex)
    }
    return arr
  }
}

const testArr = [3, 2, 6, 4, 7, 9, 1, 4, 0]
console.log(SectionSort.sectionSort(testArr))