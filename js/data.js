
const data = [
    {
        id: "1",
        name: "Foto-1",
        image: "../img/galeria/g1.jpg"
    },

    {
        id: "2",
        name: "Foto-2",
        image: "../img/galeria/g2.jpg",
    },

    {
        id: "3",
        name: "Foto-3",
        image: "../img/galeria/g3.jpg"
    },

    {
        id: "4",
        name: "Foto-4",
        image: "../img/galeria/g4.jpg"
    },

    {
        id: "5",
        name: "Foto-5",
        image: "../img/galeria/g5.jpg"
    },

    {
        id: "6",
        name: "Foto-6",
        image: "../img/galeria/g6.jpg"
    },

    {
        id: "7",
        name: "Foto-7",
        image: "../img/galeria/g7.jpg"
    },

    {
        id: "8",
        name: "Foto-8",
        image: "../img/galeria/g8.jpg"
    },

    {
        id: "9",
        name: "Foto-9",
        image: "../img/galeria/g9.jpg"
    },

    {
        id: "10",
        name: "Foto-10",
        image: "../img/galeria/g10.jpg"
    },

    {
        id: "11",
        name: "Foto-11",
        image: "../img/galeria/g11.jpg"
    },

    {
        id: "12",
        name: "Foto-12",
        image: "../img/galeria/g12.jpg"
    },

    {
        id: "13",
        name: "Foto-13",
        image: "../img/galeria/g13.jpg"
    },

    {
        id: "14",
        name: "Foto-14",
        image: "../img/galeria/g14.jpg"
    },

    {
        id: "15",
        name: "Foto-16",
        image: "../img/galeria/g16.jpg"
    },

    {
        id: "16",
        name: "Foto-17",
        image: "../img/galeria/g17.jpg"
    },

    {
        id: "17",
        name: "Foto-18",
        image: "../img/galeria/g18.jpg"
    },

    {
        id: "18",
        name: "Foto-19",
        image: "../img/galeria/g19.jpg"
    },

    {
        id: "19",
        name: "Foto-20",
        image: "../img/galeria/g20.jpg"

    },

    {
        id: "20",
        name: "Foto-23",
        image: "../img/galeria/g23.jpg"
    }

]



const contenedor_galeria = document.querySelector("#container-gallery");


data.forEach(galeria => {
    const {id, name, image } = galeria
    if (contenedor_galeria) {
        contenedor_galeria.innerHTML += `
                    <a href="${image}">
                        <div class="single-img">
                            <img  src="${image}" alt="${name}">
                        </div>
                    </a>
            `;
    }
})

