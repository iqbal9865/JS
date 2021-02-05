const myInfo = {
    firstName: 'Iqbal',
    lastName: 'Ahmed',
    getFullName: function(){
        return this.firstName +' '+ this.lastName;
    },
    salary: 25000,
    getCharge: function(amount,tips,tax){
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}
// const fullName = myInfo.getFullName();
// const remainingSalary = myInfo.getCharge(2000);
// console.log('fullName : ',fullName);
// console.log('Remaining Salary : ',remainingSalary);


const hero = {
    firstName: 'Hrithik',
    lastName: 'Roshan',
    salary: 1000000
}
const singer = {
    firstName: 'Atif',
    lastName: 'Aslam',
    salary: 1050000
}
// myInfo.getCharge();
const heroBillCharge = myInfo.getCharge.bind(hero);
heroBillCharge(250000,43,543);
heroBillCharge(200000,43,43);
console.log(hero.salary);
myInfo.getCharge.call(hero,50000,432,435);
console.log(hero.salary);
myInfo.getCharge.apply(hero,[23344,345,53]);
console.log(hero.salary);

const singerBill = myInfo.getCharge.bind(singer);
singerBill(12234);
singerBill(424556);




//another example of bind object method

const student = {
    // firstName: 'A',
    // lastName: 'B',
    getFullName: function(firstName,lastName){
        console.log(this)
        return firstName + ' ' + lastName;
    },
    tuitionFee: 17200,
    payTuitionFee: function(amount){
        console.log(this);
        this.tuitionFee = this.tuitionFee - amount;
    }
}
const student1 = {
    firstName: 'Iqbal',
    lastName: 'Ahmed',
    tuitionFee:17200
}
const student2 = {
    firstName: 'Alvi',
    lastName: 'Hasan',
    tuitionFee:17200
}
const student3 = {
    firstName: 'Jakaria',
    lastName: 'Jiku',
    tuitionFee:17200
}
const iqbalInfo = student.payTuitionFee.bind(student1);
const iqbalName = student.getFullName.bind(student2);
iqbalInfo(4000);
iqbalInfo(2000);
iqbalInfo(2000);
const storeName = iqbalName('iqbal', 'Ahmed');
console.log(storeName);