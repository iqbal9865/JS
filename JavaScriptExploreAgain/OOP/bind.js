const person = {
    firstName: 'Emran',
    lastName: 'Hasan',
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
}
const personOne = {
    firstName: 'Iqbal',
    lastName: 'Ahmed'
}
const personTwo = {
    firstName: 'Naim',
    lastName: 'Hossian'
}
const names = person.fullName.bind(personOne)
console.log(names())