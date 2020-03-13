let name = 'Jeremy Mark'

// length property - determines the number of characters in the value
console.log(name.length)

// convert to upper case
console.log(name.toUpperCase())

// convert to lower case
console.log(name.toLowerCase())

// includes method
let password = 'abc123asdf098'
console.log(password.includes('password'))

// trim method - allows us to remove the white spaces 
let firstName = ' Jeremy '
console.log(firstName)
console.log(firstName.trim())

// challenge area
// isValidPassword function
// length is more than 8 - and it doesn't contain the word password

let isValidPassword = function (password) {
    // if(password.length > 8 && !password.includes('password')) {
    //     return true
    // } else {
    //     return false
    // }
    // or this option
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asdp'))
console.log(isValidPassword('abc123!@#$%^&'))
console.log(isValidPassword('asdfpasdfpoipassword'))