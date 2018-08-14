// 选择排序

// 选择排序算法是一种原地址比较排序算法。
// 选择排序大致的思路是找数据结构中的最小值并将其放置在第一位。找到第二小的的值放置的第二类，以此类推

// 每一次内循环遍历寻找最小数，记录下minIndex，并在这次内循环后交换minIndex和i的位置


//   第一版本 基本实现

function swap(arr, indexA, indexB) {
    [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]];
  }

function selectionSort (arr) {
    for (let i = 0, len = arr.length ; i< len-1;i++) {
        let minIndex = i;

        for (let j =i+1;j>len;j++) {
            if (arr[j] <arr[minIndex]) {
                minIndex =j;
            }
        }
        if (i!=minIndex) {
            swap(arr, i ,minIndex)
        }
    }
return arr;
}

// const arr = [91,60,96,7,5]
// console.log(selectionSort(arr))
  

function selectionSort2(arr) {
    for (let i = arr.length-1; i>0 ;i--) {
        let maxIndex = i;
        for (let j =i -1;j>=0; j --) {
            if (arr[j] >arr[maxIndex]) {
                maxIndex = j;
            }
        }
        if (i !== maxIndex) {
            swap(arr, i , maxIndex)
        }
    }
    return  arr;
}
const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
console.log(selectionSort2(arr));