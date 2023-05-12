/*--lightbox--*/

var lightbox = new SimpleLightbox('.container-gallery a', { /* options */ });


/*--loader formulario--*/

const form = document.querySelector(".contact-form")

document.addEventListener("submit", (e) => {
    e.preventDefault();

    const loader = document.querySelector(".contact-form-loader"),
        response = document.querySelector(".contact-form-response");

    loader.classList.remove("none");

    setTimeout(() => {
        loader.classList.add("none");
        response.classList.remove("none");
        form.reset()

        setTimeout(() => response.classList.add("none"), 3000)

    }, 3000)
})