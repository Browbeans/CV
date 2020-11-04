window.addEventListener('load', main)
const aboutMe = document.getElementById("aboutMe")
const gallery = document.getElementById("gallery")

function main (){

}

aboutMe.onclick = function () {
    if (aboutMe.style.height = "10rem"){
        aboutMe.style.height = "20rem"
    }
    else if (aboutMe.style.height = "20rem") {
        aboutMe.style.height = "10rem"         
    }
}

gallery.onclick = function() {
    gallery.style.height = "20rem"
}