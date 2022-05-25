const users = {}

for (let i = 0; i < 4; i++){
    const name = prompt('Enter name')
    const age = prompt('Enter your age')
    users[i + 1] = {
        name: name,
        age: age
    }
}

for(const key in users) {
    console.log(`User: ${key}`);
    console.log(`Name: ${users[key].name}`);
    console.log(`Age: ${users[key].age}`);
}