const isRaining = true
// reassigning it here
// isRaining = false

console.log(isRaining)
// the only differnce between let based variables and const based variables is you can't reassign a const 
// based variables after it has been created

const person = {
    age: 30
}

person.age = 31
console.log(person)