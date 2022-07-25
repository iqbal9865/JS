if(true) {
    var varVariable = 'calling from var';
}
console.log(varVariable)

if(true) {
    let letVariable = 'calling from let';
    console.log(letVariable)
}


var a = 10;
var b = '10';
if(a == b) {
    console.log('a and b are same')
}
else{
    console.log('a and b are not same')
}
var array = [1,2,3,4,5];
array.forEach(function(x){
    console.log('foreach: '+x*x);
})

const arrayList = array.map(function(x){
    return x*x;
})
console.log('array map: '+ arrayList)