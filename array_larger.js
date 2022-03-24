const arr = [34,24,23,555,67,88,222,333,53];
var max=0;
for(var i=1; i <= arr.length; i++) {
    if(arr[i] > max) {
        max = arr[i]
    }
}
console.log('maximum value: '+max)


// array sum
const arr1 = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;
for(let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
}
console.log('sum of array: '+ sum)