"use strict"

import board from "./board.js"
import playerFactory from "./playerFactory.js"
import controllerFactory from "./controllerFactory.js"

const players = [playerFactory("Anton", "x"), playerFactory("Alesia", "o")]

const controller = controllerFactory(players, board)

board.setup()
controller.linkKeys()