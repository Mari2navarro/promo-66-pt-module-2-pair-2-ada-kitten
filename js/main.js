"use strict";

// LISTA QUERY-SELECTOR
const list = document.querySelector(".js-list");
const plus = document.querySelector(".plus");
const newform = document.querySelector(".js-newform");
const cancel = document.querySelector(".js-cancel");
const searchButton = document.querySelector(".js_button-search");
const searchDesc = document.querySelector(".js_in_search_desc");

//LISTA

const kittenDataList = [
  {
    imagen: "https://api-pw.dev.adalab.es/gato-siames.webp",
    nombre: "Anastacio",
    description:
      "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.",
    raza: "Siamés",
  },
  {
    imagen: "https://api-pw.dev.adalab.es/sphynx-gato.webp",
    nombre: "Fiona",
    description:
      "Produce fascinación y curiosidad. Exótico, raro, bello, extraño…hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.",
    raza: "Sphynx",
  },
  {
    imagen: "https://api-pw.dev.adalab.es/maine-coon-cat.webp",
    nombre: "Cielo",
    description:
      "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.",
    raza: "Maine Coon",
  },
];

//LISTA FUNCTION
function addRemove() {
  if (newform.classList.contains("collapsed")) {
    newform.classList.remove("collapsed");
  } else {
    newform.classList.add("collapsed");
  }
}

function renderKitten(kittenDataList) {
  list.innerHTML = "";
  const descSearchText = searchDesc.value;
  for (const kitten of kittenDataList) {
    if (kitten.description.includes(descSearchText)) {
      list.innerHTML += `
        <li class="card">
          <img class="card_img" src="${kitten.imagen}"
              alt="maine-coon-cat" />
          <h3 class="card_title">${kitten.nombre}</h3>
          <h4 class="card_race">${kitten.raza}</h4>
          <p class="card_description">
              ${kitten.description}
          </p>
        </li>`;
    }
  }
}

//LISTA EVENTS

plus.addEventListener("click", (ev) => {
  ev.preventDefault();
  addRemove();
});

cancel.addEventListener("click", (ev) => {
  ev.preventDefault();
  addRemove();
});

searchButton.addEventListener("click", (ev) => {
  ev.preventDefault();
  const descSearchText = searchDesc.value;
  renderKitten(kittenDataList);
});

renderKitten(kittenDataList);
