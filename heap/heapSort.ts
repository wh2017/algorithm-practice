import { MaxHeap } from "./maxHeap";

export class HeapSort {
  static heapSort(arr: number[]) {
    const maxHeap = new MaxHeap(arr)

    const heapSortArr: number[] = []
    for (let i = arr.length - 1; i >= 0; i--) {
      heapSortArr[i] = maxHeap.extractMax()
    }
    return heapSortArr
  }
}

const testArr = [3, 2, 6, 4, 7, 4, 9, 1, 0]
console.log(HeapSort.heapSort(testArr))