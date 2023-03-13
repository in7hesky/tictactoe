const controller = (players, board) => {
    let currentPlayerIndex = 0

    const linkKeys = () => {
        board.getCellNodes().forEach(node => {
            node.addEventListener("click", e => {
                board.markCell(e.target.getAttribute("data-index"), players[currentPlayerIndex].getSymbol())
                togglePlayer()
            }, {once: true})
        })
    }

    const togglePlayer = () => {
        currentPlayerIndex = currentPlayerIndex === 1? 0 : 1
    }

    return {linkKeys}
};

export default controller