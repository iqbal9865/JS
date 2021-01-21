// function fact(n) {
//     var factorial = 1;
//     for(var i=1; i<=n; i++){
//         factorial = factorial * i;
//     }
//     return factorial
// }
// var result = fact(7);
// console.log(result);


// var fact = 1;
// var num = 7;
// var i = 1;
// while(i<=num) {
//     fact = fact * i;
//     i++;
// }
// console.log(fact)

function factorial(num) {
    var fact = 1;
    var i = 1;
    while(i <= num) {
        fact = fact * i;
        console.log(i+" factorial is "+fact)
        i++;
    }
    return fact;
} 
var result = factorial(6);
console.log(result)