const notes = [
  {
    title: "My next trip",
    body: "I would like to go to Spain",
  },
  {
    title: "Habits to work on",
    body: "Exercise, Eating a bit better.",
  },
  {
    title: "Office modification",
    body: "Get a new seat",
  },
];

// console.log(notes.pop())
// notes.push('My new note')

// console.log(notes.shift())
// notes.unshift('My first note')

// notes.splice(1, 1, 'This is the new second note')

notes[2] = "This is now the new note 3";

notes.forEach(function (item, index) {
  console.log(index);
  console.log(item);
});

console.log(notes.length);
console.log(notes);

console.log(notes.indexOf("note 2"));
