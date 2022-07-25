//2! = 1*2
//3! = 1*2*3
//4! = 1*2*3*4 or 3!*4 or (4-1)! * 4
//n! = (n-1)! * n

function factorial(n) {
    if(n == 0) {
        return 1;
    }
    else {
        return n * factorial(n-1) 
        //while the condition is not false this line continue executing and store the result inside it and call itself.
    }
}
var result = factorial(5);
console.log(result)
