const square = (num) => num * num;

// const squareLong = (num) => {
//     return num * num;
//   };

console.log(square(5));

const people = [
  {
    name: "Andrew",
    age: 26,
  },
  {
    name: "Vikram",
    age: 31,
  },
  {
    name: "Jeremy",
    age: 22,
  },
];

// const age22 = people.filter((person) => person.age === 22);
// console.log(age22);
const persone = people.find((person) => person.age === 22);
console.log(person.name);
