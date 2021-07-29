import {
  filterData
} from './data.js';
import data from './data/lol/lol.js';


const dataLol = Object.values(data.data);
const btnFighters = document.querySelector("#Fighter");
const btnMarksmans=document.querySelector("#Marksman");
const btnMage=document.querySelector("#Mage");
const btnAssassin=document.querySelector("#Assassin");
const btnTank=document.querySelector("#Tank");
const btnSupport=document.querySelector("#Support");
// Mostrar todo al la página
window.onload=load;


function load(){
    Object.entries(dataLol).forEach(([key, value]) =>{
        let containerBox=`<div class="champion_container">
    <img class="champion_image" src="${value.splash}">
    <p class="champion_name">${value.name}</p>
    </div>`
    const champions=document.querySelector(".champions");
    champions.append(document.createRange().createContextualFragment(containerBox))
    console.log("ok")
})
};

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

function changeTittleRole(){

};




// const inputSearch = document.getElementById("search");
// inputSearch.addEventListener("keydown", (e) => {
//     if (e.key === "Enter") {
//      console.log(inputSearch.value);
//     }
// });
// const userSearch=inputSearch.value.toLowerCase();
//     for(let tag of filterData){
//         let tags=tag.tags.toLowerCase();
//         console.log(userSearch, tag)
// };
