//0+1+1+2+3+5+8+13+21+34+55......
// var fibo = [0,1];
// for(var i = 2; i<=10; i++) {
//     fibo[i] = fibo[i-1] + fibo[i-2];
// }
// console.log(fibo);
function fiborec(n) {
    if (n == 0) {
        return 0
    }
    if (n == 1) {
        return 1;
    }
    else{
        return fiborec(n-1) + fiborec (n-2)
    }
}
var element = fiborec(10)
console.log(element)