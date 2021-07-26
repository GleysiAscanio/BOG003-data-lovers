import data from './data/lol/lol.js';


let values=Object.values(data.data)
Object.entries(values).forEach(([key, value]) =>{
    let containerBox=`<div class="champion_container">
<img class="champion_image" src="${value.splash}">
<p class="champion_name">${value.name}</p>
</div>
</div>`
const champions=document.querySelector(".champions");
champions.append(document.createRange().createContextualFragment(containerBox))

});









// for(let index=0; index<values.length; index++){
//     if (index
//     console.log(value[index].id)
// }

