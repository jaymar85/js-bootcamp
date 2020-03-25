const todos = ['walk dog', 'exercise', 'study js', 'fix car', 'laundry']

todos.splice(2, 1)
todos.push('Find a job')
todos.shift()

console.log(`You have ${todos.length} todos!`)
console.log(todos)
