(function all() {

    // Game object

    let game = {
        xName: null,
        xIsHuman: null,
        xXo: "X",
        oName: null,
        oIsHuman: null,
        oXo: "O",
        gameBoard: [
            "", "", "",
            "", "", "",
            "", "", ""
        ],
        turn: {
            count: 0,
            addTurn: function () {
                this.count++
            }
        },
        isEmpty: function (wich) {
            if (this.gameBoard[wich] == "") {
                return true
            }
            return false
        },
        choice: "",
        humanPlay: function (wich) {

            this.gameBoard[this.choice] = wich

            setTimeout(() => {
                gameSquare.forEach((e, i) => {
                    e.textContent = game.gameBoard[i]
                })
            }, 100)

        },
        aiPlay: function (wich) {
            let choose = Math.floor(Math.random() * 9)
            if (this.isEmpty(choose) == true) {
                game.gameBoard[choose] = wich
            } else {
                return this.aiPlay(wich)
            }

            gameSquare.forEach((e, i) => {
                e.textContent = game.gameBoard[i]
            })

            setTimeout(() => {
                if (wich == "X") {
                    this.start(playerO)
                } else {
                    this.start(playerX)
                }

            }, 1000)



        },
        makePlayer: function (name, isHuman, xo) {
            let humanPlay = this.humanPlay
            let aiPlay = this.aiPlay
            let score = {
                count: 0,
                addScore: function () {
                    this.count++
                }
            }
            if (isHuman == "Human") {
                return {
                    name,
                    isHuman,
                    xo,
                    humanPlay,
                    score
                }
            } else {
                return {
                    name,
                    isHuman,
                    xo,
                    aiPlay,
                    score
                }
            }

        },
        isDraw: function () {
            if (this.turn.count < 9) {
                return false
            } else {
                return true
            }
        },
        play: function (wich) {

            if (wich.isHuman == "Human") {
                if (this.isEmpty(this.choice) != false) {
                    this.turn.addTurn()
                    this.humanPlay(wich.xo)
                }
            } else {
                this.turn.addTurn()
                this.aiPlay(wich.xo)
            }

        },
        isWin: function (wich) {
            if (this.gameBoard[0] == wich && this.gameBoard[1] == wich && this.gameBoard[2] == wich ||
                this.gameBoard[3] == wich && this.gameBoard[4] == wich && this.gameBoard[5] == wich ||
                this.gameBoard[6] == wich && this.gameBoard[7] == wich && this.gameBoard[8] == wich ||
                this.gameBoard[0] == wich && this.gameBoard[3] == wich && this.gameBoard[6] == wich ||
                this.gameBoard[1] == wich && this.gameBoard[4] == wich && this.gameBoard[7] == wich ||
                this.gameBoard[2] == wich && this.gameBoard[5] == wich && this.gameBoard[8] == wich ||
                this.gameBoard[0] == wich && this.gameBoard[4] == wich && this.gameBoard[8] == wich ||
                this.gameBoard[2] == wich && this.gameBoard[4] == wich && this.gameBoard[6] == wich) {
                return true
            } else {
                return false
            }
        },
        start: function (players) {


            if (players == playerX) {

                this.play(playerX)

            } else if (players == playerO) {

                this.play(playerO)

            }


            setTimeout(() => {
                if (this.isDraw() != true) {

                    if (this.isWin(players.xo) == true) {

                        this.stop(players)

                    }
                } else { this.stop("draw") }
            }, 500)

        },
        stop: function (wich) {

            if (wich == "draw") {
                gameSquare.forEach((e, i) => {
                    e.textContent = game.gameBoard[i]
                }
                )
                alert("BARABARA")
            } else {
                gameSquare.forEach((e, i) => {
                    e.textContent = game.gameBoard[i]
                }
                )
                alert(`${wich.name}`)
                wich.score.addScore()
            }
            this.gameBoard = [
                "", "", "",
                "", "", "",
                "", "", ""
            ]
            this.turn.count = 0
        }
    }


    // DOM

    let main = document.querySelector(".main")
    let gameYard = document.querySelector(".game-yard")

    let xNameInpt = document.getElementById("x-name")
    let xHmnBtn = document.getElementById("x-hmn-btn")
    let xAiBtn = document.getElementById("x-ai-btn")

    let oNameInpt = document.getElementById("o-name")
    let oHmnBtn = document.getElementById("o-hmn-btn")
    let oAiBtn = document.getElementById("o-ai-btn")

    let startBtn = document.getElementById("start")

    let gameSquare = document.querySelectorAll(".game-square")



    gameSquare.forEach((e, i) => {
        e.addEventListener("click", () => {
            game.choice = i

            if (game.turn.count % 2 == 0) {
                game.start(playerX)
            } else {
                game.start(playerO)
            }

        })
    })

    // EVENT LISTENER

    // for o
    oHmnBtn.addEventListener("click", () => {
        if (oNameInpt.value != "") {
            game.oName = oNameInpt.value
            game.oIsHuman = "Human"
            oHmnBtn.style.backgroundColor = "white"
            oHmnBtn.style.color = "black"
            oAiBtn.style.backgroundColor = "black"
            oAiBtn.style.color = "white"
        } else {
            alert("You must be enter a name.")
        }
    })

    oAiBtn.addEventListener("click", () => {
        if (oNameInpt.value != "") {
            game.oName = oNameInpt.value
            game.oIsHuman = "Ai"
            oAiBtn.style.backgroundColor = "white"
            oAiBtn.style.color = "black"
            oHmnBtn.style.backgroundColor = "black"
            oHmnBtn.style.color = "white"
        } else {
            alert("You must be enter a name.")
        }
    })

    // for x

    xHmnBtn.addEventListener("click", () => {
        if (xNameInpt.value != "") {
            game.xName = xNameInpt.value
            game.xIsHuman = "Human"
            xHmnBtn.style.backgroundColor = "white"
            xHmnBtn.style.color = "black"
            xAiBtn.style.backgroundColor = "black"
            xAiBtn.style.color = "white"
        } else {
            alert("You must be enter a name.")
        }
    })

    xAiBtn.addEventListener("click", () => {
        if (xNameInpt.value != "") {
            game.xName = xNameInpt.value
            game.xIsHuman = "Ai"
            xAiBtn.style.backgroundColor = "white"
            xAiBtn.style.color = "black"
            xHmnBtn.style.backgroundColor = "black"
            xHmnBtn.style.color = "white"
        } else {
            alert("You must be enter a name.")
        }
    })

    let playerX
    let playerO

    // START && VANISH

    startBtn.addEventListener("click", () => {

        playerX = game.makePlayer(game.xName, game.xIsHuman, game.xXo)
        playerO = game.makePlayer(game.oName, game.oIsHuman, game.oXo)

        if (game.xIsHuman != null && game.oIsHuman != null) {
            main.classList.add("vanish")
            setTimeout(() => {
                main.style.display = "none"
                setTimeout(() => {
                    gameYard.classList.remove("vanish")
                }, 100)


                game.start(playerX)


            }, 510);


        } else {
            alert("You must make a choice ai or human for both side")
        }

    })

    //GAME YARD BUTTONS

    let homeBtn = document.getElementById("home-btn")

    homeBtn.addEventListener("click", () => {

        gameYard.classList.add("vanish")
        setTimeout(() => {
            main.style.display = "block"
            setTimeout(() => {
                main.classList.remove("vanish")
            }, 50)


        }, 500);


        game.gameBoard = [
            "", "", "",
            "", "", "",
            "", "", ""
        ]
        game.turn.count = 0

    })

})()