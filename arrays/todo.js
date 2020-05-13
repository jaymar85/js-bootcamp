const todos = [
  {
    text: "Order dog food",
    complete: true,
  },
  {
    text: "water plants",
    complete: true,
  },
  {
    text: "study javascript",
    complete: false,
  },
  {
    text: "buy food",
    complete: true,
  },
  {
    text: "eat dinner",
    complete: false,
  },
  {
    text: "Exercise",
    complete: false,
  },
];

const deleteTodo = function (todos, todoText) {
  const index = todos.findIndex(function (todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase();
  });
  if (index > -1) {
    todos.splice(index, 1);
  }
};

// deleteTodo(todos, "!!buy food");
// console.log(todos);

const getThingsTodo = function (todos) {
  return todos.filter(function (todo) {
    return !todo.complete;
  });
};

console.log(getThingsTodo(todos));
