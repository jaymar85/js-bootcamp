var firstName = 'Jeremy'
firstName = 'Mark'

console.log(firstName)

// 1st difference is var allows redeclaring
// let and const would throw an error reference while var would not
var firstName = 'Christina'
console.log(firstName)

// 2nd diffence is var is functional scoped, not block scoped
// the if statement creates a new block so let and const would not work 
// if a function was below the var would not work
if (10 === 10) {
    // var firstName = 'Theo'
    // let firstName = 'Theo' 
}

const setName = function () {
    var firstName = 'Theo'
}

setName()
console.log(firstName)

// 3rd difference is hoisting
// if trying to access a variable before it is declare will by default causes the declaration to be hoisted
// (not the value) to the top of the program
console.log(age)
var age