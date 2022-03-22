class Person {
    constructor (name, age, phone, qualification) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.qualification = qualification;
    }
}
class Iqbal extends Person {
    constructor (name, age, phone, qualification, isMarrid) {
        super(name, age, phone, qualification)
        this.isMarrid = isMarrid;
    }
}
class Hriday extends Person {
    constructor (name, age, phone, qualification, hasGF) {
        super(name, age, phone, qualification)
        this.hasGF = hasGF;
    }
}
const IqbalObj = new Iqbal('Iqbal Ahmed Emon', 23, 1755837019, 'BSc in CSE', false);
console.log(IqbalObj)
const HridayObj = new Hriday('Hriday Karmaker', 23, 1768453264, 'BSc in CSE', true);
console.log(HridayObj)