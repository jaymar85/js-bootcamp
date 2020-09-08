const todos = [{
    text: "Feed the dogs",
    completed: true,
},
{
    text: "Water plants",
    completed: true,
},
{
    text: "Study javascript",
    completed: false,
},
{
    text: "Buy food",
    completed: true,
},
{
    text: "Exercise",
    completed: false,
}];

const filters = {
    searchText: ''
}

const renderTodos = function(todos, filters) {
    const filteredTodos = todos.filter(function(todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const incompleteTodos = filteredTodos.filter(function(todo) {
        return !todo.completed
    });

    document.querySelector('#todos').innerHTML = ''
    
    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left.`;
    document.querySelector('#todos').appendChild(summary);
    
    filteredTodos.forEach(function(todo) {
        const p = document.createElement('p');
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    });
}

renderTodos(todos, filters)

document.querySelector('#add-todo').addEventListener('click', function() {
    console.log("A new todo has been added.");
})

document.querySelector('#new-todo-text').addEventListener('input', function(e) {
    console.log(e.target.value);
})
  
document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})
