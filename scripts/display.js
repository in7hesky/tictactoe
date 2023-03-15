const display = (() => {
    const announcerNode = document.querySelector(".announcer")

    const showResult = (resultValue, player) => {
        if(resultValue) {
            showWin(player)
            return
        }
        showDraw()
        
    }

    const showWin = (player) => {
        announcerNode.innerText = `${player.getName()} wins`
        toggleVisibility()
    }

    const showDraw = () => {
        announcerNode.innerText = "draw"
        toggleVisibility()
    }

    const toggleVisibility = () => {
        announcerNode.classList.toggle("open")
    }

    return {showResult, toggleVisibility}
})();

export default display