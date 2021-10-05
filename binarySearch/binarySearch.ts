/**
 * 在有序数组中查找某一特定元素
 */
export class BinarySearch {
  static binarySearch(arr: number[], findValue: number) {
    if (arr.length) {
      let left = 0
      let right = arr.length
      while (left <= right) {
        const middleIndex = left + Math.floor((right - left) / 2)
        if (arr[middleIndex] === findValue) {
          return middleIndex
        }
        if (arr[middleIndex] > findValue) {
          right = middleIndex - 1
        } else {
          left = middleIndex + 1
        }
      }
      return -1
    }
    return -1
  }

  /** 查找第一个大于等于某一特定元素的下标 */
  static binarySearchFindFirstBigger(arr: number[], findValue: number) {
    if (arr.length) {
      let left = 0
      let right = arr.length

      while (left <= right) {
        const middleIndex = left + Math.floor((right - left) / 2)
        if (arr[middleIndex] < findValue) {
          left = middleIndex + 1

        } else {
          right = middleIndex - 1
        }
      }
      return arr[left] >= findValue ? left : -1
    }
    return -1
  }

  /** 查找最后一个小于等于某一特定元素的下标 */
    static binarySearchFindLastSmaller(arr: number[], findValue: number) {
    if (arr.length) {
      let left = 0
      let right = arr.length

      while (left <= right) {
        const middleIndex = left + Math.floor((right - left) / 2)
        if (arr[middleIndex] <= findValue) {
          left = middleIndex + 1
        } else {
          right = middleIndex - 1
        }
      }
      return arr[right] <= findValue ? right : -1
    }
    return -1
  }
}

const testArr = [1, 2, 4, 5]

console.log('find 5:', BinarySearch.binarySearch(testArr, 5))
console.log('find 6:', BinarySearch.binarySearch(testArr, 6))

console.log('find first bigger than 3:',BinarySearch.binarySearchFindFirstBigger(testArr, 3))
console.log('find last smaller than 3:', BinarySearch.binarySearchFindLastSmaller(testArr, 3))
