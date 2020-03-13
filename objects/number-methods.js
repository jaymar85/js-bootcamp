let num = 103.941

// toFixed method takes one argument to change the number of decimal spots
console.log(num.toFixed(2))

// There are not as many number methods as their are string methods but something useful is the Math object
// command click here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math 

// round method
console.log(Math.round(num))
// floor method rounds down
console.log(Math.floor(num))
// ceil method rounds up
console.log(Math.ceil(num))

// random method - this will generate a number between 0 and 1
let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
// Math.random() * (max - min + 1) = 0 - 10.9999999
// Math.floor(Math.random() * (max - min + 1)) = 0 - 10
// But we want to generate random number from 10 to 20 so we
// use Math.floor(Math.random() * (max - min + 1)) + min = 10 - 20
console.log(randomNum)

// Could create a guessing game
// challenge area
// 1 - 5 = true if correct or false if not correct
let makeGuess = function(guess) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    
    // if(guess === randomNum) {
    //     return true
    // } else {
    //     return false
    // }
    // or 
    
    return guess === randomNum
}

console.log(makeGuess(1))