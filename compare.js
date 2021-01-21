var business = 950;
var minister = 650;
var sochib = 850;
if(business > minister){
    if(business>sochib){
        console.log("Business is bigger");
    }
    else{
        console.log("Sochib is bigger");
    }
}
else{
    if(minister>sochib){
        console.log("minister is bigger");
    }
    else{
        console.log("Sochib is bigger")
    }
}

var x = 300;
var y = 250;
var z = 200;
var large = Math.max(x,y,z);
console.log("large number is = ",large)
