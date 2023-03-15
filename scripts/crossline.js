const crossline = (() => {
    const ERROR_MESSAGE = "Wrong argument"
    const line = document.querySelector(".crossline")

    const setup = () => {
        line.className = "crossline hidden"
    }

    const drawDiagonal = (num) => {
        if (num !== 1 && num !== 2) throw ERROR_MESSAGE
        line.classList.add("diag", `diag-${num}`)
        toggleVisibility()
    }

    const drawRow = (num) => {
        if (num < 1 || num > 3 || !Number.isInteger(num)) throw ERROR_MESSAGE
        line.classList.add(`row-${num}`)
        toggleVisibility()
    }

    const drawCol = (num) => {
        if (num < 1 || num > 3 || !Number.isInteger(num)) throw ERROR_MESSAGE
        line.classList.add("col",`col-${num}`)
        toggleVisibility()
    }

    const toggleVisibility = () => {
        line.classList.toggle("hidden")
    }

    return {drawDiagonal, drawRow, drawCol, setup}
})();

export default crossline