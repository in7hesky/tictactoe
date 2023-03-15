"use strict"

import board from "./board.js"
import playerFactory from "./playerFactory.js"
import controllerFactory from "./controllerFactory.js"
import modal from "./modal.js"

modal.setup()

const initApp = (playerOneName, playerTwoName) => {
    const players = [playerFactory(playerOneName, "x"), playerFactory(playerTwoName, "o")]

    const controller = controllerFactory(players, board)
    
    board.setup()
    controller.linkKeys()
}

export default initApp

