function playerFactory(name, symbol) {
    let score = 0

    const addScore = () => score++
    const getName = () => name
    const getSymbol = () => symbol
    const getScore = () => score

    return {getName, getSymbol, getScore, addScore}
}

export default playerFactory