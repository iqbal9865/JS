function makeAdjactive (adjective) {
    return function (string) {
        return `${adjective} ${string}`;
    }
}

let obj = makeAdjactive("cool");
obj("conferance");
console.log(obj())