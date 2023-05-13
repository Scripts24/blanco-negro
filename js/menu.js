
const enlaces = document.getElementsByClassName("links-nav")[0]
const hamburguesa = document.getElementsByClassName("hamb")[0]
const menuHamburguesa = document.getElementById("hamb")

let open = false

const toggleMenu = () => {
    enlaces.classList.toggle("links-nav2")
    enlaces.style.transition = "transform 0.5s ease-in-out"
}

hamburguesa.addEventListener("click", function () {
    toggleMenu()

    if (document.querySelector("links-nav.links-nav2")) {
        open = true
    } else {
        open = false
    }
})

window.addEventListener("click", function (e) {
    if (open) {
        if (e.target !== menuHamburguesa) {
            toggleMenu()
            open = false
        }
    }
})

window.addEventListener("resize", function () {
    if (screen.width > 800) {
        if (open) {
            toggleMenu()
            enlaces.style.transition = "none"
            open = false
        }
    }
})


