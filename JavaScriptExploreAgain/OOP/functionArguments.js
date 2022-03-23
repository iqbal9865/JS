function findMaxValue () {
    let max = -Infinity;
    for(let i = 0; i < arguments.length; i++) {
        if(arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
const maxNumber = findMaxValue(10, 5, 8, 45, 36, 1);
console.log(maxNumber)