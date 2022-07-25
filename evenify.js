function DoubleIt(num){
    for (let i = 0; i < num.length; i++) {
        var result = num[i] * 2;
    }
    return result;
}

function double(num){
    var arr = [];
    for (let i = 0; i < num.length; i++) {
        var s = DoubleIt(num); 
        arr.push(s);  
    }
    return arr;
}
var num = [2,4,5,7,8,10,43,65,34,37];
var result = double(num);
console.log(result);