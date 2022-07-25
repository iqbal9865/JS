var marks = 100;
if(marks >= 80) {
    console.log("A+ (Excellent)")
}
else if (marks >= 70) {
    console.log("A (Very Good)")
}
else if(marks >= 60){
    console.log('A- (Need to improve)')
}
else{
    console.log(`Average Result`)
}
                                            // end if else part                                         

var arr = [20,30,40,50];
arr.push(60)
console.log(arr)
arr.pop()
console.log(arr)
arr.unshift(10)
console.log(arr)
arr.shift();
console.log(arr)
var i;
for(i=0; i<arr.length; i++) {
    console.log(arr[i])
}
                                            // end array part
console.log("Implement while loop")
var num = 20;
while(num < 25) {
    console.log(num)
    num++;
}       
console.log("Implement linear search without function")                         
var arr1 = [10,20,30,40,50,60,70,80,90,100];
var searchValue = 80;
var count = 0
var i
for(i=0; i<arr1.length; i++) {
    if(arr1[i] == searchValue) {
        count++;
        break;
    }
    else{
        count =  0;
    }
}
if(count == 0) {
    console.log("Number not found")
}
else{
    console.log(arr1[i]+ " is in index number "+i)
}
                                    // end linear search with if-else, array and loop

function doubleIt(num) {
    return num*2;
}
var double = doubleIt(250)
console.log(double)


console.log("Implement linear search with function")
function linearSearch(A, Value) {
    var i;
    var count = 0;
    for(i=0; i<A.length; i++) {
        if(A[i]==Value){
        count++;
        break;
        }
        else{
            count=0;
        }
    }
    if(count == 0) {
        console.log("Number not found")
    }
    else{
        console.log(A[i]+" Found at index "+i)
    }
}

var A = [10,20,30,38,40,52,50];
var Value = 52;
linearSearch(A,Value)

//  end functional linear search, this topic benifit me for covering loop, array, function and if else

var student1 = {
    id : 173462142,
    name : "Md Iqbal Ahmed",
    CG : 3.57
};
console.log(student1.CG)
console.log(student1.name)
