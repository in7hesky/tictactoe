"use strict"

import board from "./board.js"
import playerFactory from "./playerFactory.js"
import controller from "./controller.js"
import modal from "./modal.js"

modal.setup()

const initApp = (playerOneName, playerTwoName) => {
    const players = [playerFactory(playerOneName, "x"), playerFactory(playerTwoName, "o")]

    controller.setPlayers(players)
    controller.setBoard(board)

    board.setup()
    controller.linkKeys()
}

export default initApp

