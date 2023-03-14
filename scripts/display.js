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
        if (announcerNode.classList.contains("open")) {
            announcerNode.classList.remove("open")
        } else {
            announcerNode.classList.add("open")
        }
    }

    return {showResult, toggleVisibility}
})();

export default display