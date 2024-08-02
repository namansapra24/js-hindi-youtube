const faccebook = {}

faccebook.id = "123abc"
faccebook.name = "Ramu"
faccebook.isLoggedIn = false

console.log(faccebook);

const regUser = {
    userId: "123123",
    name: {
        firstname: "Naman",
        lastname: "Sapra",
        othername: {
            nickname: "Namo"
        }
    }
}

console.log(regUser);
console.log(regUser.name);
console.log(regUser.name.othername.nickname); //to search value within value, nested value
