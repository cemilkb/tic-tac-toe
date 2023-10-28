// Player or Ai Choosing section
let xPlayerButton = document.getElementById("x-p-button")
let xAiButton = document.getElementById("x-ai-button")
let oPlayerButton = document.getElementById("o-p-button")
let oAiButton = document.getElementById("o-ai-button")
let playerX
let playerO

xPlayerButton.addEventListener("click", () => {
    xAiButton.classList.remove("text-[#190482]", "bg-x/[.6]", "scale-105")
    xPlayerButton.classList.add("text-[#190482]", "bg-x/[.6]", "scale-105")
    playerX = "player"
})

xAiButton.addEventListener("click", () => {
    xPlayerButton.classList.remove("text-[#190482]", "bg-x/[.6]", "scale-105")
    xAiButton.classList.add("text-[#190482]", "bg-x/[.6]", "scale-105")
    playerX = "ai"
})

oPlayerButton.addEventListener("click", () => {
    oAiButton.classList.remove("text-[#190482]", "bg-o/[.6]", "scale-105")
    oPlayerButton.classList.add("text-[#190482]", "bg-o/[.6]", "scale-105")
    playerO = "player"
})

oAiButton.addEventListener("click", () => {
    oPlayerButton.classList.remove("text-[#190482]", "bg-o/[.6]", "scale-105")
    oAiButton.classList.add("text-[#190482]", "bg-o/[.6]", "scale-105")
    playerO = "ai"
})

// Start Game

const startPage = document.getElementById("start-page")
const gameStartButton = document.getElementById("start-button")
const name1 = document.getElementById("name-1")
const name2 = document.getElementById("name-2")

gameStartButton.addEventListener("click", () => {
    startPage.classList.add("opacity-0")
    startPage.classList.add("scale-0")
    console.log(name1.value)
    console.log(name2.value)
    setTimeout(()=>{startPage.classList.add("hidden")
    gamePage.classList.remove("hidden")
    gamePage.classList.remove("opacity-0")
    gamePage.classList.remove("scale-0")},500)
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
    },500)
})