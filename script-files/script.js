window.addEventListener('load', main)
const aboutMe = document.getElementById('aboutMe')
const projects = document.getElementById('projects')
const boxes = document.getElementById('boxes')
const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const oliverScore = document.querySelector('[data-oliver-score]')
const userScore = document.querySelector('[data-user-score]')

const SELECTIONS = [
    {
        name: 'rock',
        emoji: '✊',
        beats: 'scissors',
    },
    {
        name: 'paper',
        emoji: '✋',
        beats: 'rock',
    },
    {
        name: 'scissor',
        emoji: '✌️',
        beats: 'paper',
    }
]
let i = 0; 


function main (){
    addEventListeners()
    typeWriter()
}

function typeWriter() {
    const speed = 50
    let p = 'Take a look around here to find out more about me and my knowledge'
    if(i < p.length) {
        document.getElementById('welcome').innerHTML += p.charAt(i)
        i++
        setTimeout(typeWriter, speed)
    }
} 

function addEventListeners () {
    aboutMe.onmouseover = makeAboutMeBigger
    aboutMe.onmouseout = makeAboutMeSmaller

    projects.onmouseover = makeProjectsBigger
    projects.onmouseout = makeProjectsSmaller
}


function makeAboutMeBigger(){
    aboutMe.style.height = "30rem"
}

function makeAboutMeSmaller() {
    aboutMe.style.height = "3rem"
}

function makeProjectsBigger() {
    projects.style.height = "20rem"    
}

function makeProjectsSmaller() {
    projects.style.height = "3rem"
}

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
            
    })
})

function makeSelection(selection) {
    const oliverSelection = randomSelection()
    const userWinner = isWinner(selection, oliverSelection)
    const oliverWinner = isWinner(oliverSelection, selection)
    
    addSelectionResult(oliverSelection, oliverWinner)
    addSelectionResult(selection, userWinner)

    if(userWinner)incrementScore(userScore)
    if(oliverWinner)incrementScore(oliverScore)
}

function incrementScore(Score){
    Score.innerText = parseInt(Score.innerText) + 1
}

function addSelectionResult(selection, winner) {
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if(winner) div.classList.add('winner')
    finalColumn.after(div)
}

function isWinner (selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}

function randomSelection() {
    const randomIndex =  Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS [randomIndex]
}