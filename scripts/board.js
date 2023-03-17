import crossline from "./crossline.js"
import arbiter from "./arbiter.js"

const board = (() => {
    const boardNode = document.querySelector(".board")
    let cells

    const setup = () => {
        boardNode.innerHTML = ""
        crossline.setup()
        createCells()
    }

    const markCell = (index, symbol) => {
        cells[index] = symbol
        const cellNode = document.querySelector(`.cell[data-index='${index}']`)
        cellNode.innerHTML = `<div>${symbol}</div>`
        return checkWin()
    }

    const getCellNodes = () => {
        return document.querySelectorAll(".cell")
    }

    const getEmptyCellNodes = () => {
        return Array.from(getCellNodes()).filter((node) => node.innerHTML === "")
    }

    const checkWin = () => {
        const verdict = arbiter.getVerdict(cells)
        crossline.drawVerdict(verdict)
        return verdict
    }

    const createCells = () => {
        for (let i = 0; i < 9; i++) {
            cells = [null, null, null, null, null, null, null, null, null]

            const cellNode = document.createElement("div")
            cellNode.classList.add("cell")
            cellNode.classList.add("active")
            cellNode.setAttribute("data-index", i)
            document.querySelector(".board").appendChild(cellNode)
        }
    }

    const getBoardNode = () => {return boardNode}

    const getCells = () => cells

    const getFreeCells = () => {
        const freeIndices = []

        for (let i = 0; i < cells.length; i++) 
            if (cells[i] === null) freeIndices.push(i)
        
        return freeIndices
    }

    return {setup, markCell, getCellNodes, getEmptyCellNodes, getCells, getFreeCells, getBoardNode}
})();

export default board