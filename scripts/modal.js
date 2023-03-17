import initApp from "./runner.js"

const modal = (() => {
    const UNIQUE_NAMES_MESSAGE = "Unique names required"

    const form = document.querySelector(".modal")
    const checkbox = document.querySelector(".bot-checkbox")

    const playerOneInput = document.querySelector(".player-one-input")
    const playerTwoInput = document.querySelector(".player-two-input")

    const markerOne = document.querySelector(".marker-1")
    const markerTwo = document.querySelector(".marker-2")
    const arrowButton = document.querySelector(".arrow-btn")

    const modalMessage = document.querySelector(".modal-message")

    const setup = () => {
        form.addEventListener("submit", submitHandler)
        checkbox.addEventListener("click", checkboxHandler)
        arrowButton.addEventListener("click", arrowButtonHandler)
    }

    const toggleVisibility = () => {
        const modal = document.querySelector(".modal-wrapper")
        const playfield = document.querySelector(".play-wrapper")

        modal.classList.toggle("hidden")
        playfield.classList.toggle("hidden")
    }

    const checkboxHandler = (e) => {
        playerTwoInput.toggleAttribute("disabled")
        playerTwoInput.toggleAttribute("required")
        if (playerTwoInput.hasAttribute("disabled")) {
            playerTwoInput.value = "bot"
        } else {
            playerTwoInput.value = ""
        }
    } 

    const submitHandler = (e) => {
        e.preventDefault()
        const firstPlayerData = [playerOneInput.value, markerOne.innerHTML]
        const secondPlayerData = [playerTwoInput.value, markerTwo.innerHTML]

        if (firstPlayerData[0].toUpperCase() === secondPlayerData[0].toUpperCase()) {
            modalMessage.innerHTML = UNIQUE_NAMES_MESSAGE 
        } else {
            initApp(firstPlayerData, secondPlayerData)
            toggleVisibility()
        }
    }

    const arrowButtonHandler = (e) => {
        let buffer = markerOne.innerHTML
        markerOne.innerHTML = markerTwo.innerHTML
        markerTwo.innerHTML = buffer
    }

    return {setup}
})();

export default modal