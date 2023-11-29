// Player or Ai Choosing section
let xPlayerButton = document.getElementById("x-p-button")
let xAiButton = document.getElementById("x-ai-button")
let oPlayerButton = document.getElementById("o-p-button")
let oAiButton = document.getElementById("o-ai-button")
let playerX
let playerO
let isChooseX = false
let isChooseO = false

xPlayerButton.addEventListener("click", () => {
    xAiButton.classList.remove("text-[#190482]", "bg-x/[.6]", "scale-105")
    xPlayerButton.classList.add("text-[#190482]", "bg-x/[.6]", "scale-105")
    playerX = "player"
    isChooseX = true
})

xAiButton.addEventListener("click", () => {
    xPlayerButton.classList.remove("text-[#190482]", "bg-x/[.6]", "scale-105")
    xAiButton.classList.add("text-[#190482]", "bg-x/[.6]", "scale-105")
    playerX = "ai"
    isChooseX = true
})

oPlayerButton.addEventListener("click", () => {
    oAiButton.classList.remove("text-[#190482]", "bg-o/[.6]", "scale-105")
    oPlayerButton.classList.add("text-[#190482]", "bg-o/[.6]", "scale-105")
    playerO = "player"
    isChooseO = true
})

oAiButton.addEventListener("click", () => {
    oPlayerButton.classList.remove("text-[#190482]", "bg-o/[.6]", "scale-105")
    oAiButton.classList.add("text-[#190482]", "bg-o/[.6]", "scale-105")
    playerO = "ai"
    isChooseO = true
})

// Start Game

const startPage = document.getElementById("start-page")
const gameStartButton = document.getElementById("start-button")
const xNameInput = document.getElementById("x-name-input")
const oNameInput = document.getElementById("o-name-input")
const xName = document.getElementById("x-name")
const oName = document.getElementById("o-name")

gameStartButton.addEventListener("click", () => {
    if (isChooseO == true && isChooseX == true) {
        startPage.classList.add("opacity-0")
        startPage.classList.add("scale-0")
        setTimeout(() => {
            startPage.classList.add("hidden")
            gamePage.classList.remove("hidden")
            gamePage.classList.remove("opacity-0")
            gamePage.classList.remove("scale-0")
        }, 500)
        xName.textContent = xNameInput.value
        oName.textContent = oNameInput.value
    } else { alert("NAAPTIN SEN YEĞEN YAW") }
})

// Back To Home

let gamePage = document.getElementById("game-page")
let homeButton = document.getElementById("home-button")

homeButton.addEventListener("click", () => {
    gamePage.classList.add("opacity-0", "scale-0")
    setTimeout(() => {
        gamePage.classList.add("hidden")
        startPage.classList.remove("hidden")
        startPage.classList.remove("opacity-0")
        startPage.classList.remove("scale-0")
    }, 500)
})

// Game

let boardAreas = document.querySelectorAll(".area")

let gameBoard = {
    a: ["", "", ""],
    b: ["", "", ""],
    c: ["", "", ""],
}

// move && finish

let move = "x"
let isFinish = 0

boardAreas.forEach((e) => {
    let sId = e.id.split("-")
    e.addEventListener("click", () => {
        if (move == "x") {
            if (gameBoard[sId[0]][sId[1]] == "") {
                gameBoard[sId[0]][sId[1]] = move
                move = "o"
                isFinish++
                console.log(isFinish)
            }
        } else {
            if (gameBoard[sId[0]][sId[1]] == "") {
                gameBoard[sId[0]][sId[1]] = move
                move = "x"
                isFinish++
                console.log(isFinish)
            }
        }
    })
})

// Board change

boardAreas.forEach((e) => {
    let sId = e.id.split("-")
    e.addEventListener("click", () => {
        e.innerHTML = `<span class="text-[70px] text-${gameBoard[sId[0]][sId[1]]} font-blackops">${gameBoard[sId[0]][sId[1]].toUpperCase()}</span>`
    })
})


// Is Game finish ?

let drawScore = document.getElementById("draw-score")
let xScore = document.getElementById("X-score")
let oScore = document.getElementById("O-score")

draw = 0
o = 0
x = 0

// Draw section

function alrt() {
    drawScore.innerHTML = `Score:${draw}`
    alert("Game is finished")
    boardAreas.forEach((e) => {
        e.innerHTML = ""
    })
}
boardAreas.forEach((e) => {
    e.addEventListener("click", () => {
        if (isFinish == 9) {
            isFinish = 0
            draw++
            gameBoard = {
                a: ["", "", ""],
                b: ["", "", ""],
                c: ["", "", ""],
            }
            setTimeout(alrt, 100)

        }
    })
})

// Buttons

let resButton = document.getElementById("restart-button")
let clrButton = document.getElementById("clear-button")

resButton.addEventListener("click", () => {
    drawScore.innerHTML = `Score:0`
    xScore.innerHTML = `Score:0`
    oScore.innerHTML = `Score:0`
    gameBoard = {
        a: ["", "", ""],
        b: ["", "", ""],
        c: ["", "", ""],
    }
    boardAreas.forEach((e) => {
        e.innerHTML = ""
    })
    isFinish = 0
})
clrButton.addEventListener("click", () => { 
    gameBoard = {
        a: ["", "", ""],
        b: ["", "", ""],
        c: ["", "", ""],
    }
    boardAreas.forEach((e) => {
        e.innerHTML = ""
    })
    isFinish = 0
})