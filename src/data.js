
export const filterData= (data, role)=>{
 let dataLol= data.filter(tag=> tag.tags.includes(role))
  return dataLol
};

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

// Llamado a tarjetas
export const filterNames= (data, name)=>{
  let dataLol= data.filter(names=> names.name.includes(name))
   console.log(dataLol)

 };
/*función compute o calcular, nos permitirá hacer cálculos estadísticos básicos para ser mostrados de acuerdo
 a la data proporcionada.*/

// computeStats(data);

