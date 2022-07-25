function sum () {
    let result = 0;
    for(let i=0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}
const result = sum(45, 1, 145, 65);
console.log(result);