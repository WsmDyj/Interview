// 插入排序

function insertionSort (arr) {
    for (let i=0; i<arr.length; i++) {
        var element = arr[i];
        for (var j=i-1; j>=0; j--) {
            var tmp = arr[j];
            var order = tmp - element;
            if (order>0) {
                arr[j+1] = tmp;
            }else {
                break;
            }
        }
        arr[j+1] =element;
    }
    return arr;
}

var arr= [6,5,4,3,2,1];
console.log(insertionSort(arr))