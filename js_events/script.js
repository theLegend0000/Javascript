// any browser action can be an event
// click, mouseover, mouseout, keydown, keyup, load, unload, change, submit, focus, blur

// document.getElementById("heading1").onclick = (function(){

//     alert("this is an alert")
// })

// document.getElementById("heading1").onclick = () => {

//     alert("this is an alert")
// }

// but use eventlisteners, because it gives you more features and propagation

// document.getElementById("heading1").addEventListener('click', (e) => {

//     alert("Heading clicked!")
//     console.log(e);
    
// })  // there are others like attachEvent() (internetexplorer), jQuery - on

// Important in Event Objects
// 1. type, timestamp, defaultPrevented
// 2, target, toElement, srcElement, currentTarget
// 3. clientX, clientY, screenX, screenY
// 4. altKey, ctrlKey, shiftKey, keyCode

// Event propagation => bubble up, bottom to top, (false), to stop use eventPropagation
// Event capturing => top to bottom (true)

// document.getElementById("google").addEventListener('click', (e) => {

//         e.preventDefault()
//         // e.stopPropagation()
//         console.log("google link clicked!")
//     })

// we have to remove li tag in order to completely remove the li and images

document.querySelector("#headings").addEventListener('click', (e) => {

    console.log(e.target.parentNode); //parentNode = li
    if (e.target.tagName === "H2"){
    let removeIt = e.target.parentNode
    removeIt.remove()
    }
    // OR removeIt.parentNode.removeChild(removeIt)

    
})