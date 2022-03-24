const person = {
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
const name = person.fullName.call(personOne)
console.log(name)