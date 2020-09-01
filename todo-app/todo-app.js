const todos = [{
    text: "Order dog food",
    completed: true,
},
{
    text: "water plants",
    completed: true,
},
{
    text: "study javascript",
    completed: false,
},
{
    text: "buy food",
    completed: true,
},
{
    text: "Exercise",
    completed: false,
}];

const incompleteTodos = todos.filter(function(todo) {
    return !todo.completed
});

const summary = document.createElement('h2');
summary.textContent = `You have ${incompleteTodos.length} todos left.`;
document.querySelector('body').appendChild(summary);

todos.forEach(function(todo) {
    const p = document.createElement('p');
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
});
  
// const ps = document.querySelectorAll('p');
// // console.log(ps);

// ps.forEach(function(p) {
//     console.log(p.textContent);
//     if (p.textContent.includes('the')) {
//         p.remove();
//     }
// });