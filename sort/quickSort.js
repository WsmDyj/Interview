// 快速排序
// 快速排序使用分治法把一个串（list)分为两个子串（sub-lists)。具体算法实现
  // 1.从数组中挑出一个元素，成为基准
  // 2.重新排列数组，所有元素比基准值小的摆放在基准前面，所有元素比基准大的摆在基准后面（相同的可以任意一边
  //   这个分区退出之后，该基准就处于数列的中间位置。成为分区操作
  // 3.递归的把小于基准值元素的子数列和大于基准值元素的子数列排序

// 方法一、
function quickSort (array, left, right) {
  if (Object.prototype.toString.call(array).slice(8, -1) === 'Array' && typeof left === 'number' && typeof right === 'number') {
    if (left < right) {
        var x = array[right], i = left - 1, temp;
        for (var j = left; j <= right; j++) {
            if (array[j] <= x) {
                i++;
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        quickSort(array, left, i - 1);
        quickSort(array, i + 1, right);
    }
    // console.timeEnd('1.快速排序耗时');
    return array;
} else {
    return 'array is not an Array or left or right is not a number!';
}
}
// 方法二
var quickSort2 = function (arr) {
  if (arr.length<=1){return arr}
  var pivotIndex = Math.floor(arr.length/2);
  var pivot = arr.slice(pivotIndex, 1)[0];
  var left = [];
  var right = [];
  for (var i =0;i<arr.length;i++){
    if (arr[i]<pivot) {
      left.push(arr[i])
    }else {
      right.push(arr[i])
    }
  }
  return quickSort2(left).concat([pivot], quickSort2(right));
}




var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(quickSort(arr,0,arr.length-1));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
// console.log(quickSort2(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]




