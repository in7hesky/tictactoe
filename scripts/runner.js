"use strict"

import board from "./board.js"
import playerFactory from "./playerFactory.js"
import botFactory from "./botFactory.js"
import controller from "./controller.js"
import modal from "./modal.js"

modal.setup()

const initApp = (playerOneData, playerTwoData) => {
    let firstPlayer = playerFactory(playerOneData[0], playerOneData[1])
    let secondPlayer = playerTwoData[0] === "bot" ? botFactory(playerTwoData[0], playerTwoData[1]) 
                        : playerFactory(playerTwoData[0], playerTwoData[1])
    
    controller.setBoard(board)
    board.setup()
    controller.setPlayers([firstPlayer, secondPlayer])
    controller.linkKeys()
}

export default initApp

