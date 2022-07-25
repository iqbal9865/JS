function kahini(num1,num2){
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum += element
    }
    return sum;
}
var result = kahini(1,2,3,4,5,6,7,8,9,10);
console.log(result);