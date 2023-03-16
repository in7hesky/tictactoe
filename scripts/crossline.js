const crossline = (() => {
    const ERROR_MESSAGE = "Wrong argument"
    const line = document.querySelector(".crossline")

    const setup = () => {
        line.className = "crossline hidden"
    }

    const drawVerdict = (verdict) => {
        switch(verdict) {
            case 1:
                drawRow(1)
                break;
            case 2:
                drawRow(2)
                break;
            case 3:
                drawRow(3)
                break;
            case 4:
                drawCol(1)
                break;
            case 5:
                drawCol(2)
                break;
            case 6:
                drawCol(3)
                break;
            case 7:
                drawDiagonal(1)
                break;
            case 8:
                drawDiagonal(2)
                break;
        }
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

    return {drawVerdict, setup}
})();

export default crossline