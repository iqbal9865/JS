const year = 2020;
if(year%4==0){
    console.log(year+" is a leap year");
}
else{
    console.log(year+" is not a leap year");
}

// with function
function leapYear(yourYear){
    if(yourYear%4 == 0){
        return true;
    }
    else{
        return false;
    }
}
const checkYear = leapYear(2022)
console.log(checkYear)
