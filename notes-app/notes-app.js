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

const newParagraph = document.createElement('p');
newParagraph.textContent = "This is a new element from JavaScript";
document.querySelector('body').appendChild(newParagraph);