
export const filterData= (data, role)=>{
 let dataLol= data.filter(tag=> tag.tags.includes(role))
  return dataLol
};



// /* esta función sort u ordenar recibe tres parámetros. El primer parámetro, data, nos entrega los datos.
// El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de la data se quiere ordenar. 
// El tercer parámetro, sortOrder, indica si se quiere ordenar de manera ascendente o 
// descendente.*/

// export const sortByNames = (data, sortBy)=>{
//   let orderChampions = data.sort((a,b) => a.name > b.name);
//   let reverseChampions = data.reverse();
//   if(sortBy === "ZA"){
//     return reverseChampions;
//   }
//   if(sortBy === "AZ")
//     return orderChampions;
// };
export const sortByNames = (data, select) => {

  if (select === "AZ") {
    const orderData = data.sort((a, b) => {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    })
  }
  if (select === "ZA") {
    const orderData = data.sort((a, b) => {
      if (a.name > b.name) { return -1; }
      if (a.name < b.name) { return 1; }
      return 0;
    })
  }
};
  
// /*función compute o calcular, nos permitirá hacer cálculos estadísticos básicos para ser mostrados de acuerdo
//  a la data proporcionada.*/

// computeStats(data);

