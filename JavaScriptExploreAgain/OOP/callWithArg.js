const person = {
    fullName: function (id, phone) {
        return this.firstName + " " + this.lastName + " " + id + " " + phone;
    }
}
const personOne = {
    firstName: 'Iqbal',
    lastName: 'Ahmed'
}
const personTwo = {
    firstName: 'Naim',
    lastName: 'Hossain'
}
const information = person.fullName.call(personOne, 173462142, 1755837019);
console.log(information)