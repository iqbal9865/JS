// var year = 2016;
// if (year%4==0) {
//     console.log(year," is a leap Year");
// }
// else{
//     console.log(year," is not a leap year")
// }


function leapYear(y) {
    if (y%4==0) {
        return true;
    }
    else{
        return false;
    }
}
var result2 = leapYear(2015)
if (result2 == true) {
    console.log("Its a leap year")
}
else{
    console.log("Its not a leap year")
}