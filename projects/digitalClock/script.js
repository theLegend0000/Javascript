const clock = document.getElementById("clock")

setInterval(function(){
let date = new Date()
clock.innerHTML = date.toLocaleTimeString()
}, 1000) // runs every 1000ms or 1s