const myInfo = {
    firstName: 'Iqbal',
    lastName: 'Ahmed',
    getFullName: function(){
        return this.firstName +' '+ this.lastName;
    },
    salary: 25000,
    getCharge: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}
const fullName = myInfo.getFullName();
const remainingSalary = myInfo.getCharge(2000);
console.log('fullName : ',fullName);
console.log('Remaining Salary : ',remainingSalary);
