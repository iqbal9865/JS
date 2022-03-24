class User {
    #users

    constructor () {
        this.#users = []
    }

    addUser(user) {
        this.#users.push(user);
    }

    deleteUser(id) {
        this.#users = this.#users.filter(function(user) {
            return user.id !== id
        })
    }

    getUsers() {
        return this.#users;
    }
}

const userOne = new User();
userOne.addUser({name: "Iqbal", age: 23, id: 1});
userOne.addUser({name: "Iqbal", age: 23, id: 2});
userOne.addUser({name: "Iqbal", age: 23, id: 3});
userOne.addUser({name: "Iqbal", age: 23, id: 4});

userOne.deleteUser(1);
console.log(userOne.getUsers())