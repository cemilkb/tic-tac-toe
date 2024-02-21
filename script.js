(function falan() {

    let a = "cemil"
    let b = "Human"
    let c = "Beyza"
    let d = "Human"

    // Game object

    let game = {
        xName: a,
        xIsHuman: b,
        xXo: "X",
        oName: c,
        oIsHuman: d,
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
        humanPlay: function (wich) {
            let choose = prompt(`0-8 arası bir sayı giriniz`)
            if (this.isEmpty(choose) == true) {
                game.gameBoard[choose] = wich
            } else {
                alert("Girdiğiniz alan doludur yeni bir sayı girin")
                return this.humanPlay(wich)
            }

        },
        aiPlay: function (wich) {
            let choose = Math.floor(Math.random() * 9)
            if (this.isEmpty(choose) == true) {
                game.gameBoard[choose] = wich
            } else {
                return this.aiPlay(wich)
            }
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
            alert(`           1  2  3
       a- [${this.gameBoard[0]}] [${this.gameBoard[1]}] [${this.gameBoard[2]}]
       b- [${this.gameBoard[3]}] [${this.gameBoard[4]}] [${this.gameBoard[5]}]
       c  [${this.gameBoard[6]}] [${this.gameBoard[7]}] [${this.gameBoard[8]}]`)
            if (wich.isHuman == "Human") {
                this.turn.addTurn()
                this.humanPlay(wich.xo)
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
            }
        },
        start: function (players) {
            if (players == playerX) {
                this.play(playerX)
                if (this.isDraw() != true) {
                    if (this.isWin(playerX.xo) == true) {
                        this.stop(playerX)
                    } else {
                        return this.start(playerO)
                    }
                } else { this.stop("draw") }

            } else if (players == playerO) {
                this.play(playerO)
                if (this.isDraw() != true) {
                    if (this.isWin(playerO.xo) == true) {
                        this.stop(playerO)
                    } else {
                        return this.start(playerX)
                    }
                } else { this.stop("draw") }

            }
        },
        stop: function (wich) {
            this.gameBoard = [
                "", "", "",
                "", "", "",
                "", "", ""
            ]
            this.turn.count = 0
            if (wich == "draw") {
                alert("BARABARA")
            } else {
                alert(`${wich.name}`)
                wich.score.addScore()
            }

        }
    }

    let playerX = game.makePlayer(game.xName, game.xIsHuman, game.xXo)
    let playerO = game.makePlayer(game.oName, game.oIsHuman, game.oXo)



    //game.start(playerX)   


    console.log(playerX)
    console.log(playerO)
    
    //game.moveX()


})()