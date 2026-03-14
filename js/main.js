"use strict";

// LISTA QUERY-SELECTOR 
const list = document.querySelector(".js-list")
const plus = document.querySelector(".plus")
const newform = document.querySelector(".js-newform")
const cancel = document.querySelector(".js-cancel")
const searchButton = document.querySelector(".js_button-search")
const searchDesc = document.querySelector(".js_in_search_desc")
const kittenOne = `<li class="card">
                    <article>
                        <img class="card_img" src="https://api-pw.dev.adalab.es/gato-siames.webp"
                            alt="siames-cat" />
                        <h3 class="card_title">Anastacio</h3>
                        <h4 class="card_race">Siamés</h4>
                        <p class="card_description">
                            Porte elegante, su patrón de color tan característico y sus ojos
                            de un azul intenso, pero su historia se remonta a Asía al menos
                            hace 500 años, donde tuvo su origen muy posiblemente.
                        </p>
                    </article>
                </li>`;
const kittenTwo = `<li class="card">
                    <img class="card_img" src="https://api-pw.dev.adalab.es/sphynx-gato.webp" alt="sphynx-cat" />
                    <h3 class="card_title">Fiona</h3>
                    <h4 class="card_race">Sphynx</h4>
                    <p class="card_description">
                        Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
                        hasta con pinta de alienígena han llegado a definir a esta raza
                        gatuna que se caracteriza por la «ausencia» de pelo.
                    </p>
                </li>`;
const kittenThree = `<li class="card">
                    <img class="card_img" src="https://api-pw.dev.adalab.es/maine-coon-cat.webp"
                        alt="maine-coon-cat" />
                    <h3 class="card_title">Cielo</h3>
                    <h4 class="card_race">Maine Coon</h4>
                    <p class="card_description">
                        Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
                        bella mirada se ha convertido en una de sus señas de identidad.
                        Sus ojos son grandes y las orejas resultan largas y en punta.
                    </p>
                </li>`;

list.innerHTML = `${kittenOne}${kittenTwo}${kittenThree}`;


//LISTA DATOS
const kittenOneDesc = "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";

const kittenTwoDesc = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño…hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";

const kittenThreeDesc = "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta."



//LISTA FUNCTION
function addRemove() {
    if (newform.classList.contains("collapsed")) {
        newform.classList.remove("collapsed");
    }
    else {
        newform.classList.add("collapsed");
    }


}

function renderKitten() {
    list.innerHTML = "";
    if (kittenOneDesc.includes(descSearchText)) {
        list.innerHTML += kittenOne;
    }
    if (kittenTwoDesc.includes(descSearchText)) {
        list.innerHTML += kittenTwo;
    }
    if (kittenThreeDesc.includes(descSearchText)) {
        list.innerHTML += kittenThree;
    }
}



//LISTA EVENTS 

plus.addEventListener("click", (ev) => {
    ev.preventDefault();
    addRemove();


})

cancel.addEventListener("click", (ev) => {
    ev.preventDefault();
    addRemove();


})

searchButton.addEventListener("click", (ev) => {
    ev.preventDefault();
    const descSearchText = searchDesc.value;
    renderKitten(kittenData);
    //No nos funciona la función 
})

//LISTA OBJETOS
const kittenData = {
    kittenOne: {
        imagen: "https://api-pw.dev.adalab.es/gato-siames.webp",
        nombre: "Anastacio",
        description: "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.",
        raza: "Siamés",
    },

    kittenTwo: {
        imagen: "https://api-pw.dev.adalab.es/sphynx-gato.webp",
        nombre: "Fiona",
        description: "Produce fascinación y curiosidad. Exótico, raro, bello, extraño…hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.",
        raza: "Sphynx",
    },

    kittenThree: {
        imagen: "https://api-pw.dev.adalab.es/maine-coon-cat.webp",
        nombre: "Cielo",
        description: "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.",
        raza: "Maine Coon",

    }
}
