import scoretable from "./scoretable.js"
import display from "./display.js"

const controller = (() => {
    let currentPlayerIndex

    let players, board

    const linkKeys = () => {
        board.getCellNodes().forEach(node => {
            node.addEventListener("click", keyHandler, {once: true})
            node.classList.add("active")
        })

        if (players[0].getSymbol() === "o") togglePlayer()
    }

    const setPlayers = (playersArray) => {
        players = playersArray
        currentPlayerIndex = 0
        scoretable.setup(players)
    }

    const setBoard = (b) => board = b

    const keyHandler = (e) => {
        const status = board.markCell(e.target.getAttribute("data-index"), 
                    players[currentPlayerIndex].getSymbol())
        e.target.classList.remove("active")
        if (status >= 0) {
            startEndSequence(status)
            return
        }
        togglePlayer()
    }

    const toggleFreeze = () => {
        board.getBoardNode().classList.toggle("noclick")
    }

    const togglePlayer = () => {
        scoretable.toggleCurrentPlayer()
        currentPlayerIndex = currentPlayerIndex === 1 ? 0 : 1
        if (players[currentPlayerIndex].getName() === "bot")
            doWhileFrozen(() => {
                players[currentPlayerIndex].takeTurn(board)
            }, 350)
    }

    const startEndSequence = (status) => {
        if (status > 0) players[currentPlayerIndex].addScore()
        display.showResult(status, players[currentPlayerIndex])
        scoretable.updateScore(players)
        doWhileFrozen(refreshAll, 3000)
    }

    const refreshAll = () => {
        currentPlayerIndex = 0
        board.setup()
        display.toggleVisibility()
        scoretable.setup(players)
        scoretable.updateScore(players)
        linkKeys()
    }

    const doWhileFrozen = (callback, frozenTime) => {
        toggleFreeze()
        setTimeout(() => {
            callback()
            toggleFreeze()
        }, frozenTime)
    }

    return {linkKeys, setPlayers, setBoard}
})();

export default controller