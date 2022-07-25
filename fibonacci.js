//0+1+1+2+3+5+8+13+21+34+55.......
var fibo = [0,1]
for(var i=2; i<=10; i++) {
    fibo[i] = fibo[i-1] + fibo [i-2]
    console.log(fibo[i-2] +" + "+fibo[i-1]+" = "+fibo[i])
}
console.log(fibo)


function fibonacci(n) {
    var fib = [0,1]
    for(var i=2; i<=n; i++) {
        fib[i] = fib[i-2] + fib[i-1]
    }
    return fib
}
var result = fibonacci(10);
console.log(result)
