var arr = [1000,3230,23,300,432,4,8349,839,32,46];
var highest = arr[0];
for(var i=0; i<=arr.length; i++){
    var element = arr[i];
    if (highest < element) {
        highest = element;
    }
}
console.log('highest number : ',highest);
var lowest = arr[0];
for(var j =0; j<arr.length; j++) {
    var component = arr[j];
    if (lowest > component) {
        lowest = component;
    }
}
console.log("lowest number : ",lowest);