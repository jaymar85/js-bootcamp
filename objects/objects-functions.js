let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
    // console.log(`${book.title} by ${book.author}`)
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.summary)
console.log(bookSummary.pageCountSummary)

// Challenge area

let getTemp = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) * (5 / 9),
        kelvin: (fahrenheit + 459.67) * (5 / 9)
    }
}

let getFahrenheit = getTemp(74)
// let getCelsius = getTemp(50)
// let getKelvin = getTemp(50)

console.log(getFahrenheit)
// console.log(getCelsius.celsius)
// console.log(getKelvin.kelvin)