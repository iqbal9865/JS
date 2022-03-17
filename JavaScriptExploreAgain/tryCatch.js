let names = 'Haydar';
if(true) {
    let namesAgain = 'kabir';
    console.log(namesAgain);
}
console.log(names);
try {
    console.log(namesAgain);
}
catch(err) {
    console.log('error found: '+err)
}