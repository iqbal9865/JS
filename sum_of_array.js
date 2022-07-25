var num = [10,20,30,40,50,60,70,80,100];
var sum = 0;
for(var i=0; i<num.length; i++) {
    sum = sum + num[i];
}
console.log(sum)


//sum of array using function
function sumition(n){
    var sum = 0;
    for(var i=0; i<n.length; i++) {
        sum += n[i];
    }
    return sum;
}
var n = [10,20,30,40,50,60,70,80];
var result = sumition(n)
console.log(result)