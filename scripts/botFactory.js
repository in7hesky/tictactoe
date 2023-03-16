import playerFactory from "./playerFactory.js"
import arbiter from "./arbiter.js"

const botFactory = (name, symbol) => {
    const SYMBOLS = ["x", "o"]
    const CENTER_CELL = 4
    const player = playerFactory(name, symbol)

    const takeTurn = (board) => {
        const freeCells = board.getFreeCells()

        const targetCellIndex = chooseMarkIndex(board)

        board.getCellNodes()[freeCells[targetCellIndex]].click()  
    }

    const chooseMarkIndex = (board) => {
        const freeCells = board.getFreeCells()

        const botWinIndex = predictWinOutcome(board, freeCells)
        if (botWinIndex > -1) return botWinIndex

        const playerWinIndex = predictWinOutcome(board, freeCells, true)
        if (playerWinIndex > -1) return playerWinIndex

        const centerIndex = freeCells.indexOf(CENTER_CELL)

        return centerIndex > -1 ? centerIndex : getRandomNumber(0, freeCells.length)
    }

    const predictWinOutcome = (board, freeCells, forEnemy = false) => {
        let subjectSymbol = !forEnemy ? symbol : (symbol === SYMBOLS[0] ? SYMBOLS[1] : SYMBOLS[0])
        
        for (let i = 0; i < freeCells.length; i++) {
            let futureCells = [...board.getCells()]
            futureCells[freeCells[i]] = subjectSymbol
            if (arbiter.getVerdict(futureCells) > 0) return i
        }

        return -1
    }

    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min)

    return {
        ...player,
        takeTurn
    }
}

export default botFactory