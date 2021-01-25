function callBack(name,age,task){
    console.log('name : ',name);
    console.log('Age : ',age);
    task();
}
function coding(){
    console.log('Iqbal Still coding right now');
}
function sleep(){
    console.log('Someone preparation for sleep');
}

callBack('Iqbal',22,coding);
callBack('Someone',21,sleep);