window.addEventListener('load', main)
const aboutMe = document.getElementById("aboutMe")
const projects = document.getElementById("projects")

function main (){

}

aboutMe.onmouseover = function () {
    aboutMe.style.height = "20rem"  
}

aboutMe.onmouseout = function() {
    aboutMe.style.height = "3rem"
}

projects.onmouseover = function () {
    projects.style.height = "20rem"  
}

projects.onmouseout = function() {
    projects.style.height = "3rem"
}