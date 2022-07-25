function sayloveyou(){
    console.log(`I love my cat`);
    console.log(`I love doing programming`);
}
sayloveyou();
var x = 10;
var e = 20;
var u = 30;
console.log(`What are you doing`);
console.log('What about you?');
sayloveyou();

function add(numOne, numTwo){
    var result = numOne + numTwo;
    return result;
}
var sum = add(10,20);
console.log(sum)

var sumTwo = add(100,400);
console.log(sumTwo);

//this is a comment

/*this
is 
a comment */


function greeting(name) {
    //alert('Hello ' + name);
    console.log("Hello, "+name);
  }
  
  function processUserInput(callback) {
     console.log(callback);
    //var name = prompt('Please enter your name.');
    let name = "sajon"
    callback(name);
  }
  
  processUserInput(function greeting(name) {
      console.log("Hello, " + name);
  });