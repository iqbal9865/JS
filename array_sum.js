var arr = [10,20,32,40,41,1,46,22,54,90];
var sum = 0;
for(var i=0; i<arr.length; i++) {
    sum += arr[i];
}
console.log("Sum of all numbers : ",sum);

//now i gonna solve this problem using function
function summ(ar){
    var sum = 0;
    for(var z=0; z<ar.length; z++) {
        sum += ar[z];
    }
    return sum;
}
var a = [10,21,12,42,54,76,8,100];
var result = summ(a);
console.log("sum of all number :",result);