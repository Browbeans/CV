/** Function that will start the main function when the page loads in */
window.addEventListener('load', main)


/** Sets the value of i(index) to 0  */
let i = 0; 

/** Main function that will start the program*/
function main (){
    addEventListeners()
    typeWriter()
}


/** Function typewriter that creates a visual effect of a typewriter */
function typeWriter() {
    const speed = 50
    let p = 'Take a look around here to find out more about me and my knowledge'
    if(i < p.length) {
        document.getElementById('welcome').innerHTML += p.charAt(i)
        i++
        setTimeout(typeWriter, speed)
    }
}

/** Function that will "notice" users interactivity with the page, and triggers function based on users "action" for example (mouseclick) etc*/
function addEventListeners () {
    let aboutMe = document.getElementById('aboutMe')
    aboutMe.onmouseover = makeAboutMeBigger
    aboutMe.onmouseout = makeAboutMeSmaller
    
    let projects = document.getElementById('projects')
    projects.onmouseover = makeProjectsBigger
    projects.onmouseout = makeProjectsSmaller
}

/** Will give div height of 30rem when user hover over it with the mouse */
function makeAboutMeBigger(){
    aboutMe.style.height = "30rem"
}

/** Will give a div the height 3rem when the user isnt hover over it*/
function makeAboutMeSmaller() {
    aboutMe.style.height = "3rem"
}

/** Will give div height of 30rem when user hover over it with the mouse */
function makeProjectsBigger() {
    projects.style.height = "20rem"    
}

/** Will give a div the height 3rem when the user isnt hover over it*/
function makeProjectsSmaller() {
    projects.style.height = "3rem"
}

