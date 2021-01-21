var personOne = 135;
var personTwo = 220;
var personThree = 210;
if (personOne > personTwo) {
    if (personOne > personThree) {
        console.log("Person1 have more money");
    }
    else{
        console.log("Person3 have more money");
    }
}
else{
    if (personTwo > personThree) {
        console.log("Person2 have more money");
    }
    else{
        console.log("person3 have more money");
    }
}


var result = Math.max(personOne,personTwo,personThree);
console.log("highest : ",result);