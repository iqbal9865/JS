if(NaN === NaN) {
    console.log('true');
}
else {
    console.log('false');
}
console.log(typeof NaN);

let a = "1";
let b = 1;

console.log(typeof a == typeof b && a == b)  

const text = "Hello World";
const temp = Number(text);
console.log(temp);

console.log("" === ""); // null === null returns true
console.log(undefined === undefined)  //undefined === undefined returns true


// then why NaN === NaN is returns false? Why? 


// BtW From here this is not weird thing in JS. I just lazy to create another file.
// const allPera = 'Bangladesh is My country';
// console.log(allPera.slice(-10));

const textOne = "           Emran Hasan         ";
console.log('length of textone: '+ textOne.length);
const textTwo = textOne.trim();
console.log("length of text two: "+ textTwo.length);


const country = 'Bangladesh';
const population = 180000000;
const combined = `Our country name is ${country}. it has a huge population over ${population}`;
console.log(combined);

const number = 999999999999999466656;
console.log(number)
// JavaScript variable can store maximum 15 integer digits and 17 floting digits, then it unable to remember the numbers.

let x = 123;
let y = x.toString();
console.log(typeof y)

let w = 123;
let z = w.valueOf();
console.log(typeof w);

console.log(typeof Number(false));

const date = Date();
console.log(date)

const numbers = Number(new Date("1970-01-02"))
console.log(numbers)

//--- all about array -----//
let array = [10, 2, 20, 300, 54, 65];
let updatedArray = [...array, 87]
console.log('original arrray: '+array)
console.log('updated number: '+ updatedArray)
let maximumNumber = Math.max(...array);
console.log(maximumNumber)
console.log(typeof array)
// console.log(...array)