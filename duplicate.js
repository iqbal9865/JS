var arr = [10,2,3,45,10,67,43,2,5,3];
var uniqearr = [];
for(var i=0; i<arr.length; i++) {
    var element = arr[i];
    var index = uniqearr.indexOf(element)
    if (index == -1) {
        uniqearr.push(element)
    }
}
console.log(uniqearr)