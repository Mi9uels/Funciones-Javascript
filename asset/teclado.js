let primero = document.getElementById("primero")
let segundo = document.getElementById("segundo")
let tercero = document.getElementById("tercero")
let cuarto = document.getElementById("cuarto")
let body = document.querySelector("body")

var color = "black"
var newbg = "#425F57"
var td="dashed"

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
    color = "#7b0c72"
    } else if (event.key === 's') {
    color = "#1bc43a"
    } else if (event.key === 'd') {
    color = "#704F4F"
    }})





document.addEventListener('keydown', function (){
    primero.style.backgroundColor=color
    segundo.style.backgroundColor=color
    tercero.style.backgroundColor=color
    cuarto.style.backgroundColor=color
    body.style.backgroundColor=newbg
});