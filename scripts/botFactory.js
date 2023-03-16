import playerFactory from "./playerFactory.js"

const botFactory = (name, symbol) => {
    const player = playerFactory(name, symbol)

    const takeTurn = (board) => {
        const freeCells = getFreeCells(board.getCells())

        const targetCellIndex = getRandomNumber(0, freeCells.length)

        board.getCellNodes()[freeCells[targetCellIndex]].click()

        
    }

    const getFreeCells = (cells) => {
        const freeIndices = []

        for (let i = 0; i < cells.length; i++) 
            if (cells[i] === null) freeIndices.push(i)
        
        return freeIndices
    }

    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min)
    

    return {
        ...player,
        takeTurn
    }
}

export default botFactory