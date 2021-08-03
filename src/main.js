import {filterData} from './data.js';
import data from './data/lol/lol.js';


const dataLol = Object.values(data.data);
const btnFighters = document.querySelector("#Fighter");
const btnMarksmans = document.querySelector("#Marksman");
const btnMage = document.querySelector("#Mage");
const btnAssassin = document.querySelector("#Assassin");
const btnTank = document.querySelector("#Tank");
const btnSupport= document.querySelector("#Support");

// Mostrar toda la página
window.onload=load;


function load(){
    Object.entries(dataLol).forEach(([key, value]) =>{
        let containerBox=`<div class="champion_container">
    <img class="champion_image" src="${value.splash}">
    <p class="champion_name">${value.name}</p>
    </div>`
    const champions=document.querySelector(".champions");
    champions.append(document.createRange().createContextualFragment(containerBox))
})
};

//Filtra los Campeones por su Roles

btnFighters.addEventListener("click", filterChampions);
btnMarksmans.addEventListener("click", filterChampions);
btnMage.addEventListener("click", filterChampions);
btnAssassin.addEventListener("click", filterChampions);
btnTank.addEventListener("click", filterChampions);
btnSupport.addEventListener("click", filterChampions);

function filterChampions(event) {
    const champions = document.querySelector(".champions");
    champions.innerHTML=""
    let datafiltered = filterData(dataLol, event.target.id)
    Object.entries(datafiltered).forEach(([key, value]) => {
    let containerBox = `<div class="champion_container">
    <img class="champion_image" src="${value.splash}">
    <p class="champion_name">${value.name}</p>
    </div>`
    const champions = document.querySelector(".champions");
    champions.append(document.createRange().createContextualFragment(containerBox))
  });
};

//*Select de Dificultad generado dinamicamente
const selectDifficulty = document.getElementById("difficulty")
for(let i = 1; i <= 10; i++) {
    let opcion = document.createElement("option");
    opcion.value = i;
    opcion.innerText = ("Nivel " + i);
    selectDifficulty.append(opcion); 
}   


//Filtro de Campeones en el Input de Busqueda

const inputSearch = document.getElementById("search");
const resultado = document.getElementById("container");

const userSearch = ()=>{
    resultado.innerHTML = "";
    const valueSearch = inputSearch.value.toLowerCase();
    for(let value of dataLol){
        let nameChampions = value.name.toLowerCase();
        if(nameChampions.indexOf(valueSearch) !== -1){
            resultado.innerHTML +=`<div class="champion_container">
            <img class="champion_image" src="${value.splash}">
            <p class="champion_name">${value.name}</p>
            </div>`
        }
    }
        if(resultado.innerHTML === ""){
            resultado.innerHTML += `<h2>No encontrado</h2>`
        }
}

inputSearch.addEventListener("keyup", userSearch);


