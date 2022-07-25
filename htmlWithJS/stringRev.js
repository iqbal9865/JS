const ReverseString = (string) => {
    return string.split("").reverse().join("").split(" ").reverse().join(" ")
}

const reverse = ReverseString('I love Bangladesh');
console.log(reverse)