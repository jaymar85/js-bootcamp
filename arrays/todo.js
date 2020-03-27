const todos = ['walk dog', 'exercise', 'study js', 'fix car', 'laundry']

todos.splice(2, 1)
todos.push('Find a job')
todos.shift()

console.log(`You have ${todos.length} todos!`)

todos.forEach(function (todo, index) {
    const num = index + 1
    console.log(`${num}. ${todo}`) 
})

for (let count = 0; count < todos.length; count++) {
    const num = count + 1
    console.log(`${num}. ${todos[count]}`)
}