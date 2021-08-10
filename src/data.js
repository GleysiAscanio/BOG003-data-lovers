//filtrado de Roles
export const filterData= (data, role)=>{
 let dataLol= data.filter(tag=> tag["tags"].includes(role))
  return dataLol
};
//Organizacion AZ - ZA
export const sortByNames = (data, select) => {

  if (select === "AZ") {
      data.sort((a, b) => {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    })
  }
  if (select === "ZA") {
      data.sort((a, b) => {
      if (a.name > b.name) { return -1; }
      if (a.name < b.name) { return 1; }
      return 0;
    })
  } 
  return data;
};

// Llamado a tarjetas
export const filterCards= (data, name)=>{
  let dataLol= data.filter(names=> names.name.includes(name))
    return dataLol
 };
//filtro de Dificultad
 export const levelDifficulty= (data, select)=>{
  let dataLol= data.filter(difficulty=> difficulty.info.difficulty==select)
   return dataLol
 };
 
/*función compute o calcular, nos permitirá hacer cálculos estadísticos básicos para ser mostrados de acuerdo
 a la data proporcionada.*/

// computeStats(data);

