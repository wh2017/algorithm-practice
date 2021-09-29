import { getRandom } from "../util.ts/getRandom";
import { swap } from "../util.ts/swap";

/**
 * 选定一个数，比它小的都放在它左边，大于等于它的都放在它右边
 */
export class QuickSort {
  static quickSort(arr: number[], start: number, end: number) {
    if (!arr.length) {
      return arr
    }

    const baseValue = arr[getRandom(end - start + 1, start)]
    let leftIndex = start
    let rightIndex = end

    while (leftIndex < rightIndex) {
      if (arr[leftIndex] < baseValue) {
        leftIndex++
      }
      if (arr[leftIndex] > baseValue) {
        swap(arr, leftIndex, rightIndex)
        rightIndex--
      }
      if (arr[rightIndex] > baseValue) {
        rightIndex--
      }
      if (arr[rightIndex] < baseValue) {
        swap(arr, rightIndex, leftIndex)
        leftIndex++
      }
      this.quickSort(arr, start, leftIndex - 1)
      this.quickSort(arr, leftIndex + 1, end)
    }

    return arr
  }
}

const testArr = [2, 3, 1, 4, 8, 6, 90, 7]
console.log(QuickSort.quickSort(testArr, 0, testArr.length - 1))