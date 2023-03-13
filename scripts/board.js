const board = (() => {
    let cells

    const setup = () => {
        let boardNode = document.querySelector(".board")

        boardNode.innerHTML = ""

        createCells()
    }

    const markCell = (index, symbol) => {
        cells[index] = symbol
        document.querySelector(`.cell[data-index='${index}']`).innerHTML = 
            `<div>${symbol}</div>`
    }

    const getCellNodes = () => {
        return document.querySelectorAll(".cell")
    }

    const createCells = () => {
        for (let i = 0; i < 9; i++) {
            cells = [null, null, null, null, null, null, null, null, null]

            const cellNode = document.createElement("div")
            cellNode.classList.add("cell")
            cellNode.setAttribute("data-index", i)
            document.querySelector(".board").appendChild(cellNode)
        }
    }

    return {setup, markCell, getCellNodes}
})();

export default board