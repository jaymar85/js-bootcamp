const notes = ['note 1', 'note 2', 'note 3']

// console.log(notes.pop())
// notes.push('My new note')

// console.log(notes.shift())
// notes.unshift('My first note')

// notes.splice(1, 1, 'This is the new second note')

notes[2] = 'This is now the new note 3'

notes.forEach(function (item, index) {
    console.log(index)
    console.log(item)
})

console.log(notes.length)
console.log(notes)

// counting
for(let count = 0; count <= 2; count++) {
    console.log(count)
}

for (let count = 0; count < notes.length; count++) {
    console.log(notes[count])
}

for (let count = notes.length - 1; count >= 0; count--) {
    console.log(notes[count])
}