const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain.'
},{
    title: 'Habits to work on',
    body: 'Eating and exercising better.'
},{    
    title: 'Office modification',
    body: 'Get a new seat.'
}]

const filters = {
    searchText: ''
}

const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    // rerenders #notes after filter
    document.querySelector('#notes').innerHTML = ''
    
    filteredNotes.forEach(function(note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}
 
renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function() {
    console.log('add a note')
})

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#for-fun').addEventListener('change', function(e) {
    // checked is for checkboxes like value is for type=text
    e.target.checked
})