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

            if (wich == "X" && playerO.isHuman == "Ai") {
                this.start(playerO)
            } else if (wich == "O" && playerX.isHuman == "Ai") {
                this.start(playerX)
            }

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
                if (wich == "X" && playerO.isHuman == "Aİ") {
                    this.start(playerO)
                } else if (wich == "O" && playerX.isHuman == "Aİ") {
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
        drawScore: 0,
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
                if (game.isDraw() == false && game.isWin(wich.xo) == false) {
                    game.aiPlay(wich.xo)
                }
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

            this.updateScore()

            if (players == playerX) {

                this.play(playerX)

            } else if (players == playerO) {

                this.play(playerO)

            }


            setTimeout(() => {
                if (this.isWin(players.xo) == true) {
                    this.stop(players)
                }
            }, 200)
            if (this.isWin(players.xo) != true) {

                setTimeout(() => {

                    if (this.isDraw() == true) {

                        this.stop("draw")

                    }
                }, 400)
            }

        },
        updateScore: function () {
            drawScore.textContent = `Draw: ${this.drawScore}`
            oScore.textContent = `${playerO.name}: ${playerO.score.count}`
            xScore.textContent = `${playerX.name}: ${playerX.score.count}`
        },
        stop: function (wich) {

            this.gameBoard = [
                "", "", "",
                "", "", "",
                "", "", ""
            ]
            this.turn.count = 0

            if (wich == "draw") {
                gameSquare.forEach((e, i) => {
                    e.textContent = game.gameBoard[i]
                }
                )
                this.drawScore++
                alert("BARABARA")
            } else {
                wich.score.addScore()
                gameSquare.forEach((e, i) => {
                    e.textContent = game.gameBoard[i]
                }
                )
                alert(`${wich.name}`)
            }

            this.updateScore()
        },
        restart: function () {
            this.drawScore = 0
            playerO.score.count = 0
            playerX.score.count = 0
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

    let drawScore = document.getElementById("draw-score")
    let oScore = document.getElementById("o-score")
    let xScore = document.getElementById("x-score")


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
        if (oNameInpt.value != "" && xNameInpt.value != oNameInpt.value) {
            game.oName = oNameInpt.value
            game.oIsHuman = "Human"
            oHmnBtn.style.backgroundColor = "white"
            oHmnBtn.style.color = "black"
            oAiBtn.style.backgroundColor = "black"
            oAiBtn.style.color = "white"
        } else {
            alert("You must be enter a name. And they must be different.")
        }
    })

    oAiBtn.addEventListener("click", () => {
        if (oNameInpt.value != "" && xNameInpt.value != oNameInpt.value) {
            game.oName = oNameInpt.value
            game.oIsHuman = "Ai"
            oAiBtn.style.backgroundColor = "white"
            oAiBtn.style.color = "black"
            oHmnBtn.style.backgroundColor = "black"
            oHmnBtn.style.color = "white"
        } else {
            alert("You must be enter a name. And they must be different.")
        }
    })

    // for x

    xHmnBtn.addEventListener("click", () => {
        if (xNameInpt.value != "" && xNameInpt.value != oNameInpt.value) {
            game.xName = xNameInpt.value
            game.xIsHuman = "Human"
            xHmnBtn.style.backgroundColor = "white"
            xHmnBtn.style.color = "black"
            xAiBtn.style.backgroundColor = "black"
            xAiBtn.style.color = "white"
        } else {
            alert("You must be enter a name. And they must be different.")
        }
    })

    xAiBtn.addEventListener("click", () => {
        if (xNameInpt.value != "" && xNameInpt.value != oNameInpt.value) {
            game.xName = xNameInpt.value
            game.xIsHuman = "Ai"
            xAiBtn.style.backgroundColor = "white"
            xAiBtn.style.color = "black"
            xHmnBtn.style.backgroundColor = "black"
            xHmnBtn.style.color = "white"
        } else {
            alert("You must be enter a name. And they must be different.")
        }
    })

    let playerX
    let playerO

    // START && VANISH

    startBtn.addEventListener("click", () => {

        game.drawScore = 0

        gameSquare.forEach((e, i) => {
            e.textContent = game.gameBoard[i]
        })

        playerX = game.makePlayer(game.xName, game.xIsHuman, game.xXo)
        playerO = game.makePlayer(game.oName, game.oIsHuman, game.oXo)

        game.updateScore()

        if (game.xIsHuman != null && game.oIsHuman != null) {
            main.classList.add("vanish")
            setTimeout(() => {
                main.style.display = "none"
                setTimeout(() => {
                    gameYard.classList.remove("vanish")
                }, 100)


                if (playerX.isHuman == "Ai") {
                    game.start(playerX)
                }


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

    let resBtn = document.getElementById("res-btn")

    resBtn.addEventListener("click", () => {
        game.restart()
        game.updateScore()
    })

    let cltBtn = document.getElementById("clr-btn")

    cltBtn.addEventListener("click", () => {
        game.gameBoard = [
            "", "", "",
            "", "", "",
            "", "", ""
        ]
        game.turn.count = 0
        gameSquare.forEach((e, i) => {
            e.textContent = game.gameBoard[i]
        })
    })


})()