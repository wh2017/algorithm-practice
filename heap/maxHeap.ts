import { swap } from "../util.ts/swap"

/** 最大堆： 父节点均大于左右两个子节点 */
export class MaxHeap {
  private data: number[] = []

  constructor(arr?: number[]) {
    if (arr?.length) {
      for (let i = 0; i < arr.length; i++) {
        this.add(arr[i])
      }
    }
  }

  public get maxHeapData() {
    return this.data
  }

  public get size() {
    return this.data.length
  }

  public leftChild(index: number) {
    return index * 2 + 1
  }

  public rightChild(index: number) {
    return index * 2 + 2
  }

  public parent(index: number) {
    if (index === 0) {
      throw new Error('0 has no parent')
    }
    return Math.floor((index - 1) / 2)
  }

  /** 向堆中添加元素 */
  public add(ele: number) {
    this.data.push(ele)
    this.siftUp(this.data.length - 1)
  }

  public isEmpty() {
    return !this.data.length
  }

  public findMax() {
    if (this.isEmpty()) {
      throw new Error('the heap is empty')
    }
    return this.data[0]
  }

  /** 取出堆中最大的元素 */
  public extractMax() {
    const max = this.findMax()

    swap(this.data, 0, this.data.length - 1)

    // 删除最后一个元素
    this.data.pop()

    this.siftDown(0)

    return max
  }

  /** 上浮调整堆节点 */
  private siftUp(index: number) {
    let i = index
    while (i > 0 && this.data[i] > this.data[this.parent(i)]) {
      const parentIndex = this.parent(i)
      swap(this.data, i, parentIndex)
      i = parentIndex
    }
  }

  /** 下沉调整堆节点：只允许删除堆顶节点 */
  private siftDown(index: number) {
    while (this.leftChild(index) < this.data.length) {
      const leftChild = this.leftChild(index)
      const rightChild = this.rightChild(index)
      let maxIndex = leftChild

      /** 存在右孩子 && 右孩子 > 左孩子 => 最大值下标为右孩子下标 */
      if (rightChild < this.size && this.data[rightChild] > this.data[leftChild]) {
        maxIndex = rightChild
      }

      if (this.data[index] > this.data[maxIndex]) {
        break
      }

      swap(this.data, maxIndex, index)
      index = maxIndex
    }
  }
}

const testArr = [3, 2, 6, 4, 7, 4, 9, 1, 0]
const maxHeap = new MaxHeap(testArr)
console.log(maxHeap.maxHeapData)

const arr = []
for (let i = 0; i < testArr.length; i++) {
  arr[i] = maxHeap.extractMax()
}
// extractMax得到的序列为降序
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < arr[i + 1]) {
    throw new Error('extract error')
  }
}
  console.log('extract success', arr)

