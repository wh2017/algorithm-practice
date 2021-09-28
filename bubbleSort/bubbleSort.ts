import { swap } from "../util.ts/swap";

export class BubbleSort {
  static bubbleSortWithFlag(arr: number[]) {
    /** 记录是否执行过位置交换，若未执行过，则数组本身有序 */
    let isSwap = false
    const length = arr.length
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1)
          isSwap = true
        }
      }
      if (!isSwap) {
        break
      }
    }
    return arr
  }

  /** 记录最后一次交换数据的位置，该位置之后的数据已有序 */
  static bubbleSortWithRecordLastSwapIndex(arr: number[]) {
    const length = arr.length
    let lastSwapIndex = 0
    for (let i = 0; i < length - lastSwapIndex; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1)
          lastSwapIndex = j
        }
      }
    }
    return arr
  }

}


console.log(BubbleSort.bubbleSortWithFlag([3, 4, 2, 5, 1, 7, 8]))
console.log(BubbleSort.bubbleSortWithRecordLastSwapIndex([3, 4, 5, 2, 1, 6, 0]))