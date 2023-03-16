import scoretable from "./scoretable.js"
import display from "./display.js"

const controller = (() => {
    let currentPlayerIndex = 0

    let players, board

    const linkKeys = () => {
        board.getCellNodes().forEach(node => {
            node.addEventListener("click", keyHandler, {once: true})
            node.classList.add("active")
        })
    }

    const setPlayers = (playersArray) => {
        players = playersArray
        scoretable.setup(players)
    }

    const setBoard = (b) => board = b

    const keyHandler = (e) => {
        const status = board.markCell(e.target.getAttribute("data-index"), 
                    players[currentPlayerIndex].getSymbol())
        e.target.classList.remove("active")

        if (status >= 0) {
            if (status > 0) players[currentPlayerIndex].addScore()
            display.showResult(status, players[currentPlayerIndex])
            scoretable.updateScore(players)
            toggleFreeze()
            setTimeout(refreshAll, 3000)
            return
        }
        scoretable.toggleCurrentPlayer()
        togglePlayer()
    }

    const toggleFreeze = () => {
        board.getEmptyCellNodes().forEach(node => {
            node.classList.toggle("active")
            if (node.classList.contains("active")) {
                node.addEventListener("click", keyHandler)
            } else {
                node.removeEventListener("click", keyHandler)
            }
        })
    }

    const togglePlayer = () => {
        currentPlayerIndex = currentPlayerIndex === 1 ? 0 : 1
        if (players[currentPlayerIndex].getName() === "bot") {
            players[currentPlayerIndex].takeTurn(board)
        }
    }

    const refreshAll = () => {
        currentPlayerIndex = 0
        board.setup()
        display.toggleVisibility()
        scoretable.setup(players)
        scoretable.updateScore(players)
        linkKeys()
    }

    return {linkKeys, setPlayers, setBoard}
})();

export default controller