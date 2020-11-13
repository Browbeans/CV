/** Get elemenst from DOM and put them in global variables */
const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.getElementById('finalcolumn')
const oliverScore = document.getElementById('oliverscore')
const userScore = document.getElementById('userscore')

/** Creates an array with objects for the selections in rock paper scissor */
const SELECTIONS = [
    {
        name: 'rock',
        emoji: '✊',
        beats: 'scissor',
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

/**
 * Function that will take in the users choice
 * @param {Param} selectionButton 
 */
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)       
    })
})

/** This function will read all selections and decide winner and determine wich to call upon
 * @param {Param} selection Gets user choice from previous function
*/
function makeSelection(selection) {
    const oliverSelection = randomSelection()
    const userWinner = isWinner(selection, oliverSelection)
    const oliverWinner = isWinner(oliverSelection, selection)
    
    addSelectionResult(oliverSelection, oliverWinner)
    addSelectionResult(selection, userWinner)

    if(userWinner)incrementScore(userScore)
    if(oliverWinner)incrementScore(oliverScore)
}


/** This function will increment the current score based on who wins in the game
 * @param {Param} Score Takes the score from previous function
 */
function incrementScore(Score){
    Score.innerText = parseInt(Score.innerText) + 1
}

/** This function will change styling for the winner icon 
 * @param {Param} selection Users selection
 * @param {Param} winner Will decide based on selection how to style
*/
function addSelectionResult(selection, winner) {
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if(winner) div.classList.add('winner')
    finalColumn.after(div)
}

/** Function that enable a winner, based on "beats" in the object 
 * @param {Param} opponentSelection Computers selection 
*/
function isWinner (selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}

/** Function that will generate the computers "choice" based on math random  */
function randomSelection() {
    const randomIndex =  Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS [randomIndex]
}