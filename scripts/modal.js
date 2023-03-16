import initApp from "./runner.js"

const modal = (() => {
    const UNIQUE_NAMES_MESSAGE = "Unique names required"

    const form = document.querySelector(".modal")
    const checkbox = document.querySelector(".bot-checkbox")
    const playerOneInput = document.querySelector(".player-one-input")
    const playerTwoInput = document.querySelector(".player-two-input")
    const modalMessage = document.querySelector(".modal-message")

    const setup = () => {
        form.addEventListener("submit", submitHandler)
        checkbox.addEventListener("click", checkboxHandler)
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
        const firstName = playerOneInput.value
        const secondName = playerTwoInput.value

        if (firstName.toUpperCase() === secondName.toUpperCase()) {
            modalMessage.innerHTML = UNIQUE_NAMES_MESSAGE 
        } else {
            initApp(firstName, secondName)
            toggleVisibility()
        }
    }

    return {setup}
})();

export default modal