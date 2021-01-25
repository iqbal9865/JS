var numbers = [10,20,30,40,20,10,60,50,60,100,80,50,30];
var uniqeValue = [];
for(var i=0; i<numbers.length; i++) {
    var element = numbers[i];
    var index = uniqeValue.indexOf(element);
    if (index == -1) {
        uniqeValue.push(element);
    }
}
console.log(uniqeValue);

var d = numbers.indexOf(4)
console.log(d)
