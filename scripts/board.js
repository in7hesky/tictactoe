import crossline from "./crossline.js"
import arbiter from "./arbiter.js"

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

    const getCells = () => cells

    return {setup, markCell, getCellNodes, getEmptyCellNodes, getCells}
})();

export default board