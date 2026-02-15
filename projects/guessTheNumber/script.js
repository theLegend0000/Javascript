let randomNumber = parseInt(Math.random() * 100 + 1)
console.log(randomNumber)
const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const button = document.createElement("p")

let prevGuess = []
let playGame = true
let numGuess = 0

if (playGame){

    submit.addEventListener("click", function(e){

            e.preventDefault()
            const guess = parseInt(userInput.value)
            validateGuess(guess)
    })
}

function validateGuess(guess){

    if (isNaN(guess)){

        alert("Please enter a valid number")
    }
    else if(guess < 1){
        alert("Please enter a number greater than 1")
    }
    else if(guess > 100){
        alert("Please enter a number less than 100")
    }
    else{
        prevGuess.push(guess)
        if (numGuess === 9 && guess != randomNumber){
            
            displayGuess(guess)
            displayMsg(`Game Over. The number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){

    if (guess === randomNumber){
        displayMsg(`You guessed it right!`)
        endGame()
    }
    else if(guess > randomNumber){
        displayMsg(`Number is high.`)
    }
    else{
        displayMsg(`Number is low.`)
    }
}

function displayGuess(guess){

    userInput.value = ""
    guessSlot.innerHTML += `${guess}, `
    numGuess++
    remaining.innerHTML = `${10 - numGuess}`
}

function displayMsg(msg){

    lowOrHi.innerHTML = `<h2>${msg}</h2>`
}

function endGame(){
    
    userInput.value = ""
    userInput.setAttribute("disabled", "")
    button.classList.add("button")
    button.innerHTML = "<button id = 'newGameButton'>Start New Game </button>"
    startOver.appendChild(button)
    playGame = false
    newGame()
}

function newGame(){

    const newGameButton = document.querySelector("#newGameButton")
    newGameButton.addEventListener("click", function(e){

        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 0
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${10 - numGuess}`
        userInput.removeAttribute("disabled")
        startOver.removeChild(button)
        lowOrHi.innerHTML = ""
        playGame = true
    })
}