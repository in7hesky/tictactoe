const scoretable = (() => {
    const CURRENT_CLASS = "current-player"
    const tableNode = document.querySelector(".scoretable")
    const playerOneRow = document.querySelector(".player-one-row")
    const playerTwoRow = document.querySelector(".player-two-row")

    const setup = (players) => {
        playerOneRow.lastChild.textContent = 0
        playerTwoRow.lastChild.textContent = 0

        playerOneRow.firstChild.textContent = players[0].getName()
        playerTwoRow.firstChild.textContent = players[1].getName()

        playerOneRow.classList.add(CURRENT_CLASS)
        playerTwoRow.classList.remove(CURRENT_CLASS)
    }
    
    const updateScore = (players) => {
        playerOneRow.lastChild.textContent = players[0].getScore()
        playerTwoRow.lastChild.textContent = players[1].getScore()
    }

    const toggleCurrentPlayer = () => {
        if (playerOneRow.classList.contains(CURRENT_CLASS)) {
            playerOneRow.classList.remove(CURRENT_CLASS)
            playerTwoRow.classList.add(CURRENT_CLASS)
        } else {
            playerTwoRow.classList.remove(CURRENT_CLASS)
            playerOneRow.classList.add(CURRENT_CLASS)
        }
    }

    return {updateScore, toggleCurrentPlayer, setup}
})();

export default scoretable