//import { example } from './data.js';
import data from './data/lol/lol.js';


const values=Object.values(data.data)
Object.entries(values).forEach(([key, value]) =>{
    let containerBox=`<div class="champion_container">
<img class="champion_image" src="${value.splash}">
<p class="champion_name">${value.name}</p>
</div>`
const champions=document.querySelector(".champions");
champions.append(document.createRange().createContextualFragment(containerBox))

});

const inputSearch = document.getElementById("search");

inputSearch.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
     console.log(inputSearch.value);
    }
});





// for(let index=0; index<values.length; index++){
//     if (index
//     console.log(value[index].id)
// }

