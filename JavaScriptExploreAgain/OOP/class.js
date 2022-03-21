class Mobile {
    constructor (name, model, price) {
        this.name = name;
        this.model = model;
        this.price = price;
    }
}
const Realme = new Mobile("Realme", "C25S", 14500);
const Readme = new Mobile("Readme", "Note9", 17000);

console.log(Realme);
console.log(Readme);