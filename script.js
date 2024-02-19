let game = {
    xName: prompt("Name Player X"),
    xIsHuman: prompt("Player X Human or Ai ?"),
    xXo: "X",
    oName: prompt("Name ="),
    oIsHuman: prompt("Player O Human or Ai ?"),
    oXo: "O",
    gameBoard: {
        a: ["", "", ""],
        b: ["", "", ""],
        c: ["", "", ""]
    },
    turn: {
        count: 0,
        addTurn: function () {
            this.count++
        }
    },
    humanPlay: function (wich) {
        let get = prompt("harf")
        let set = get.split("-")
        let value = wich
        let arrayFill = (() => {
            game.gameBoard[set[0]][set[1]] = value
        })()
    },
    aiPlay: function (wich) {
        alert(wich)
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
       a- [${this.gameBoard["a"][0]}] [${this.gameBoard["a"][1]}] [${this.gameBoard["a"][2]}]
       b- [${this.gameBoard["b"][0]}] [${this.gameBoard["b"][1]}] [${this.gameBoard["b"][2]}]
       c  [${this.gameBoard["c"][0]}] [${this.gameBoard["c"][1]}] [${this.gameBoard["c"][2]}]`)
        if (wich.isHuman == "Human") {
            this.turn.addTurn()
            this.humanPlay(wich.xo)
        } else {
            this.turn.addTurn()
            this.aiPlay(wich.xo)
        }

    },
    isWin: function (wich) {
        if (this.gameBoard["a"][0] == wich && this.gameBoard["a"][1] == wich && this.gameBoard["a"][2] == wich ||
            this.gameBoard["b"][0] == wich && this.gameBoard["b"][1] == wich && this.gameBoard["b"][2] == wich ||
            this.gameBoard["c"][0] == wich && this.gameBoard["c"][1] == wich && this.gameBoard["c"][2] == wich ||
            this.gameBoard["a"][0] == wich && this.gameBoard["b"][0] == wich && this.gameBoard["c"][0] == wich ||
            this.gameBoard["a"][1] == wich && this.gameBoard["b"][1] == wich && this.gameBoard["c"][1] == wich ||
            this.gameBoard["a"][2] == wich && this.gameBoard["b"][2] == wich && this.gameBoard["c"][2] == wich ||
            this.gameBoard["a"][0] == wich && this.gameBoard["b"][1] == wich && this.gameBoard["c"][2] == wich ||
            this.gameBoard["a"][2] == wich && this.gameBoard["b"][1] == wich && this.gameBoard["c"][0] == wich) {
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
        this.gameBoard = {
            a: ["", "", ""],
            b: ["", "", ""],
            c: ["", "", ""]
        }
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
game.start(playerX)

console.log(playerX)
console.log(playerO)

//game.moveX()