import crossline from "./crossline.js"

const board = (() => {
    let cells

    const setup = () => {
        let boardNode = document.querySelector(".board")
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

    const checkWin = () => {
        if (cells[0] !== null && cells[1] === cells[0] && cells[2] === cells[1]) {
            crossline.drawRow(1)
            return 1
        } else if (cells[3] !== null && cells[4] === cells[3] && cells[4] === cells[5]) {
            crossline.drawRow(2)
            return 1
        } else if (cells[6] !== null && cells[7] === cells[6] && cells[8] === cells[7] ) {
            crossline.drawRow(3)
            return 1
        } else if (cells[0] !== null && cells[3] === cells[0] && cells[6] === cells[3]) {
            crossline.drawCol(1)
            return 1
        } else if (cells[1] !== null && cells[4] === cells[1] && cells[7] === cells[4]) {
            crossline.drawCol(2)
            return 1
        } else if (cells[2] !== null && cells[5] === cells[2] && cells[8] === cells[5]) {
            crossline.drawCol(3)
            return 1
        } else if (cells[0] !== null && cells[4] === cells[0] && cells[8] === cells[4]) {
            crossline.drawDiagonal(1)
            return 1
        } else if (cells[2] !== null && cells[4] === cells[2] && cells[6] === cells[4]) {
            crossline.drawDiagonal(2)
            return 1
        } else if (cells[0] !== null && cells[1] !== null && cells[2] !== null &&
            cells[3] !== null && cells[4] !== null && cells[5] !== null &&
            cells[6] !== null && cells[7] !== null && cells[8] !== null) {
            return 0
        } else {
            return -1
        }
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

    return {setup, markCell, getCellNodes}
})();

export default board