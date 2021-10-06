export class MergeSort {
  /*采用分治法： 首先将数据样本拆分为两个子数据样本, 并分别对它们排序，最后再将两个子数据样本合并在一起;
  拆分后的两个子数据样本序列, 再继续递归的拆分为更小的子数据样本序列,
  再分别进行排序, 直到最后数据序列为1，而不再拆分
  复杂度：Olog(n)
  */
  static mergeSort(arr: number[]) {

    const left = 0
    const right = arr.length - 1
    this.sort(arr, left, right)

    return arr
  }

  /** 递归调用排序 */
  static sort(arr: number[], left: number, right: number) {
    if (left >= right) return

    const middle = left + Math.floor((right - left) / 2)
    this.sort(arr, left, middle)
    this.sort(arr, middle + 1, right)

    this.merge(arr, left, middle, right)
  }

  /** merge 两个有序的数据样本 */
  static merge(arr: number[], left: number, middle: number, right: number) {
    const copyArr = arr.slice(left, right + 1)
    let i = left, j = middle + 1

    for (let k = left; k <= right; k++) {
      if (i > middle) {
        arr[k] = copyArr[j - left]
        j++
      } else if (j > right) {
        arr[k] = copyArr[i - left]
        i++
      } else if (copyArr[i - left] <= copyArr[j - left]) {
        arr[k] = copyArr[i - left]
        i++
      } else if (copyArr[i - left] > copyArr[j - left]) {
        arr[k] = copyArr[j - left]
        j++
      }
    }
  }
}

const testArr = [3, 2, 6, 4, 7, 9, 1, 4, 0]
console.log(MergeSort.mergeSort(testArr))