var arr = [1020,3200,45,253,6054,33,52,57,980,659];
var max = arr[0];
for(var i = 0; i<arr.length; i++) {
    if (arr[i]>max) {
        max = arr[i];
    }
}
console.log(max)