// 冒泡排序
事件复杂度O(n^2)
//俩俩比较相邻记录的排序码，若发生逆序，则交换；
// 有俩种方式进行冒泡，一种是先把小的冒泡到前边去，另一种是把大的元素冒泡到后边。


// var swap = function (index1, index2) {
//     var aux = array[index1];
//     array[index1] = array[index2];
//     array[index2] = aux;
// }

// function createNodeSortedArray (size) {
//     var array = new ArrayList();
//     for (let i=size; i>0; i--) {
//         array.insert(i);
//     }
//     return array;
// }
// function ArrayList () { //join方法拼接数组元素一个字符串，并返回该字符串
//     var array = [];
//     this.insert = function(item) {
//         array.push(item);
//     };
//     this.toString = function() {
//         return array.join();
//     }
//     this.bubbleSort = function () {
//         var length = array.length;
//         for (let i=0; i<length; i++) {
//             for (let j=0; j<length-1; j++) {  //当前项和下一项的比较
//                 if (array[j] > array[j+1]) {
//                     swap (j, j+1);
//                 }
//             }
//         }
//     };
//     this.modifiedBubbleSort = function () {
//         var length = array.length;
//         for (let i=0; i<length; i++) {
//             for (let j=0; j<length-1-i; j++) {
//                 if (array[j] > array[j+1]);
//                 swap(j,j+1);
//             }
//         }
//     }
// }

// var array = createNodeSortedArray(5);
// console.log(array.toString());
// // array.bubbleSort();
// array.modifiedBubbleSort()
// console.log(array.toString());


// 第一版本
// function swap(arr, indexA, indexB) {
//     [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]];
//   }
// function bubbleSort (arr) {
//     // for (let i=arr.length-1; i>0; i--) {
//     //     for (let j=0; j<i ;j++){
//     //         if (arr[j] > arr[j + 1]) {
//     //             swap(arr, j, j + 1);
//     //           }
//     //     }
//     // }
//     for (let i =0;i<arr.length;i++){
//         for(let j=0;j<arr.length-1-i;j++){
//             if (arr[j] > arr[j + 1]) {
//                 swap(arr, j, j + 1);
//             }
//         }
//     }
//     return arr;
// }
// const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
// console.log(bubbleSort(arr));


function swap(arr, indexA, indexB) {
    [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]];
  }
function bubbleSort(arr, compareFunc) {
    for (let i = arr.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (compareFunc(arr[j], arr[j + 1]) > 0) {
          swap(arr, j, j + 1);
        }
      }
    }
  
    return arr;
  }
  
  // test
  const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
  console.log(bubbleSort(arr, (a, b) => a - b));
  console.log(bubbleSort(arr, (a, b) => b - a));