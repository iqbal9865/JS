function Fact(num) {
    if (num == 0) {
        return 1;
    }
    else{
        return num * Fact(num - 1) 
    }
}
var factorial = Fact(10);
console.log(factorial);