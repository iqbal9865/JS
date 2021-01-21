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


//using function i gonna solve this problem
function largenumber(a) {
    var high = a[0];
    for(var k=0; k<a.length; k++) {
        var digit = a[k];
        if (high < digit) {
            high = digit;
        }
        
    }
    return high;
}
var array = [10,200,3,321,5,1,45,23,64];
var large = largenumber(array);
console.log('large number using function : ', large);