import initApp from "./runner.js"

const modal = (() => {
    const form = document.querySelector(".modal")

    const setup = () => {
        form.addEventListener("submit", submitHandler)
    }

    const toggleVisibility = () => {
        const modal = document.querySelector(".modal-wrapper")
        const playfield = document.querySelector(".play-wrapper")

        modal.classList.toggle("hidden")
        playfield.classList.toggle("hidden")
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const formData = new FormData(form)
        console.log(formData.get("player-one-input"))
        initApp(formData.get("player-one-input"), formData.get("player-two-input"))
        toggleVisibility()
    }

    return {setup}
})();

export default modal