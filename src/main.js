import {
  filterData,
  sortByNames,
  filterCards,
  levelDifficulty
} from './data.js';
import data from './data/lol/lol.js';


const dataLol = Object.values(data.data);
const btnFighters = document.querySelector("#Fighter");
const btnMarksmans = document.querySelector("#Marksman");
const btnMage = document.querySelector("#Mage");
const btnAssassin = document.querySelector("#Assassin");
const btnTank = document.querySelector("#Tank");
const btnSupport = document.querySelector("#Support");
const selectDifficulty = document.getElementById("difficulty");
const inputSearch = document.getElementById("search");
const resultado = document.getElementById("container");
const selectOrganized = document.getElementById("organized");
const modal = document.getElementById("modalContainer");



// Mostrar toda la página. #1.Historia de Usuario
window.onload = load;

function load() {
  Object.entries(dataLol).forEach(([key, value]) => {
    let containerBox = `<div id="${value.name}"class="champion_container">
    <img id="${value.name}" class="champion_image" src="${value.splash}">
    <p id="${value.name}" class="champion_name">${value.name}</p>
    </div>`
    const champions = document.querySelector(".champions");
    champions.append(document.createRange().createContextualFragment(containerBox))
  })
  const championsName = document.querySelector("#container")
  championsName.addEventListener("click", cardsNames)
  // Filtrado por dificultad
  const difficulty = document.getElementById("difficulty")
  difficulty.addEventListener("change", (e) => {
    resultado.innerHTML=""
    let datafiltered = levelDifficulty(dataLol, e.target.value)
    Object.entries(datafiltered).forEach(([key, value]) => {
      let containerBox = `<div id="${value.name}" class="champion_container">
    <img id="${value.name}" class="champion_image" src="${value.splash}">
    <p id="${value.name}"class="champion_name">${value.name}</p>
    </div>`
      const champions = document.querySelector(".champions");
      champions.append(document.createRange().createContextualFragment(containerBox))
    });
  })
}
//Filtro de Campeones en el Input de Busqueda. #3 Historia de Usuario.

const userSearch = () => {
  resultado.innerHTML = "";
  const valueSearch = inputSearch.value.toLowerCase();
  for (let value of dataLol) {
    let nameChampions = value.name.toLowerCase();
    if (nameChampions.indexOf(valueSearch) !== -1) {
      resultado.innerHTML += `<div id="${value.name}" class="champion_container">
            <img id="${value.name}" class="champion_image" src="${value.splash}">
            <p id="${value.name}"class="champion_name">${value.name}</p>
            </div>`
    }
  }
  if (resultado.innerHTML === "") {
    resultado.innerHTML += `<h2>No Encontrado</h2>`
  }
}

inputSearch.addEventListener("keyup", userSearch);

//Filtra los Campeones por sus Roles. #4 Historia de Usuario.

btnFighters.addEventListener("click", filterChampions);
btnMarksmans.addEventListener("click", filterChampions);
btnMage.addEventListener("click", filterChampions);
btnAssassin.addEventListener("click", filterChampions);
btnTank.addEventListener("click", filterChampions);
btnSupport.addEventListener("click", filterChampions);

function filterChampions(event) {
  const champions = document.querySelector(".champions");
  champions.innerHTML = ""
  let datafiltered = filterData(dataLol, event.target.id)
  Object.entries(datafiltered).forEach(([_, value]) => {
    let containerBox = `<div id="${value.name}" class="champion_container">
    <img id="${value.name}" class="champion_image" src="${value.splash}">
    <p id="${value.name}"class="champion_name">${value.name}</p>
    </div>`
    const champions = document.querySelector(".champions");
    champions.append(document.createRange().createContextualFragment(containerBox))
  });
}

//Select para Ordenar campeones AZ - ZA

selectOrganized.addEventListener("change", () => {
  resultado.innerHTML = ""
  load(sortByNames(dataLol, selectOrganized.value))
});


//*Select de Dificultad generado dinamicamente

for (let i = 1; i <= 10; i++) {
  let opcion = document.createElement("option");
  opcion.value = i;
  opcion.innerText = ("Nivel " + i);
  selectDifficulty.append(opcion);
}


//*Creacion de Tarjetas. #6 Historia de Usuario 
function cardsNames(e) {
  let cardFilter = []
  modal.innerHTML = ""
  if (e.target.id != "container") {
    cardFilter = filterCards(dataLol, e.target.id)
    modal.classList.add("show")
    let card = `<div class="modalCard" id="modalCard">
    <div class="modalImg" style="background-image: url('${cardFilter[0].splash}');">
    </div>
    <div class="modalText">
      <div class="closeModal" id="closeModal"><img src="close.png" /></div>
      <p class="nameCard">${cardFilter[0].name}</p>
      <p class="tittleCard">${cardFilter[0].title}</p>
      <p class="descriptionCard">
      ${cardFilter[0].blurb}
      </p>
      <p class="tittleCard">Stats</p>
      <ul class="listStats">
        <li><span><img src="difficulty.png"/></span> Difficulty:            ${cardFilter[0].info.difficulty}</li>
        <li><span><img src="attack.png"/></span> Attack:  ${cardFilter[0].info.attack}</li>
        <li><span><img src="armor.png"></span> Armor:  ${cardFilter[0].stats.armor}</li>
        <li><span><img src="potion.png" alt=""></span> Magic:  ${cardFilter[0].info.magic}</li>
        <li><span><img src="speed.png" alt=""></span> Move Speed:  ${cardFilter[0].stats.movespeed}</li>
      </ul>
    </div>
  </div>`
    modal.append(document.createRange().createContextualFragment(card))
    const closeModal = document.getElementById("closeModal");
    closeModal.addEventListener("click", () => {
      modal.classList.remove("show")
    });
  }
}
