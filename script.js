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
    } else { alert("Choose for both side ai or player") }
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
let turn = document.getElementById("turn")

// Board

let board = {
    a: ["", "", ""],
    b: ["", "", ""],
    c: ["", "", ""],
}

// clicking

playerChoice = "x"

clickArea(playerChoice)

function clickArea(playerChoice) {
    boardAreas.forEach((e) => {
        let lookBoard = e.id.split("-")
        let first = lookBoard[0]
        let second = lookBoard[1]

        if (board[first][second] == "") {
            e.addEventListener("click", () => {
                let lookBoard = e.id.split("-")
                let first = lookBoard[0]
                let second = lookBoard[1]

                board[first][second] = playerChoice
                makeMove()

            })
        }


    })
    turn.innerHTML = `${playerChoice.toUpperCase()} Turn`
    setTimeout(winDraw, 500)
}


boardAreas.forEach((e) => {
    e.addEventListener("click", () => {
        if (playerChoice == "x") {
            playerChoice = "o"
            clickArea(playerChoice)
        } else {
            playerChoice = "x"
            clickArea(playerChoice)
        }
    })
})

// make a move
function makeMove() {
    for (let i = 0; i < 9; i++) {

        if (i <= 2) {
            boardAreas[i].innerHTML = `<span class="text-[70px] text-${board.a[i]} font-blackops">${board.a[i].toUpperCase()}</span>`
        } else if (i <= 5) {
            boardAreas[i].innerHTML = `<span class="text-[70px] text-${board.b[i - 3]} font-blackops">${board.b[i - 3].toUpperCase()}</span>`
        } else {
            boardAreas[i].innerHTML = `<span class="text-[70px] text-${board.c[i - 6]} font-blackops">${board.c[i - 6].toUpperCase()}</span>`
        }

    }

}

// Area Hover   
function areaHover() {
    boardAreas.forEach((e) => {
        let lookBoard = e.id.split("-")
        let first = lookBoard[0]
        let second = lookBoard[1]
        function over() {
            e.classList.add("bg-[red]")
        }
        if (board[first][second] == "") {
            e.addEventListener("mouseover", over)
            e.addEventListener("click", () => {
                e.removeEventListener("mouseover", over)
            })
            e.addEventListener("mouseout", () => {
                e.classList.remove("bg-[red]")
            })
        }

    })
}

areaHover()

// Who is win or is draw

let dialog = document.getElementById("diyalog")
let closeDialog = document.getElementById("close-diyalog")

function winDraw() {
    if (board.a[0] != "" && board.a[1] != "" && board.a[2] != "" && board.b[0] != "" && board.b[1] != "" && board.b[2] != ""
        && board.c[0] != "" && board.c[1] != "" && board.c[2] != "") {
        dialog.showModal();
    }
}


closeDialog.addEventListener("click", () => {

    board = {
        a: ["", "", ""],
        b: ["", "", ""],
        c: ["", "", ""],
    }

    makeMove()
    areaHover()
    turn.innerHTML = "X Turn"

    dialog.close()
})