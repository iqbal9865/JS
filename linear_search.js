var array = [11,34,12,56,75,45,89,35,966,234,743];
var searchNumber = 56;
var count = 0;
for(var i = 0; i<array.length; i++) {
    if(array[i] == searchNumber){
        count++;
        break;
    }
    else
    {
        return -1;
    }
}
if(count==0) {
    console.log('number not found');
}
else{
    console.log('YAY number found')
}