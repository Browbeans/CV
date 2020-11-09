window.addEventListener('load', main)
const aboutMe = document.getElementById('aboutMe')
const projects = document.getElementById('projects')
const boxes = document.getElementById('boxes')
let i = 0; 
let o = 0;  


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

/*window.onresize = function () {
    if 
}*/

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
