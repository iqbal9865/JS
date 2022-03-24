// const person = {
//     fullName: function (university, location) {
//         return this.firstName + ' ' + this.lastName + ' from ' + university + ' ' + location;
//     }
// }
// const person1 = {
//     firstName: 'Iqbal',
//     lastName: 'Ahmed'
// }
// const person2 = {
//     firstName: 'Random',
//     lastName: 'Person'
// }
// const names = person.fullName.call(person1, 'City University', 'Savar Dhaka');
// console.log(names)
//call methods: you can access a methods which one is declare in another object using call()

const person = {
    fullName: function (university, location) {
        return this.firstName + ' ' + this.lastName + ' from ' + university + ' ' + location;
    }
}
const person1 = {
    firstName: 'Iqbal',
    lastName: 'Ahmed'
}
const person2 = {
    firstName: 'Random',
    lastName: 'Person'
}
const names = person.fullName.apply(person2, ['City University', 'Savar Dhaka']);
console.log(names)
//apply(): apply methods is similar to call(). but the difference is it receives arguments as an array.