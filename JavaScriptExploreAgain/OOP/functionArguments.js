function findMaxValue () {
    let max = 0;
    for(let i = 0; i < arguments.length; i++) {
        if(arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
const maxNumber = findMaxValue(10, 5, 8, 45, 360, 1);
console.log(maxNumber)