import { filterData, sortByNames, filterCards } from '../src/data.js';


describe('filterData', () => {
  it('Es una función que filtra la data según roles', () => {
    expect(typeof filterData).toBe('function');
  })
  let expectArrayRol = [{name: "Aatrox", tags: ["Fighter", "Tank"]},{name: "Ahri",tags: ["Mage", "Assassin"]}];
  it('deberia retornar los tags de los Campeones', () => {
    expect(filterData(expectArrayRol,"Fighter")).toEqual([{name: "Aatrox", tags: ["Fighter", "Tank"]}])
  })
});

describe('sortByNames', ()=> {
  it('Es una funcion que ordena la data alfabeticamente y al inverso', ()=>{
    expect(typeof sortByNames).tobe('function');
  })
  let expectNames = [{name: "Aatrox"},{name: "Braum"},{name: "Caitlyn"}];
  it('deberia restornar la data de forma ascendente', ()=> {
    expect(sortByNames(expectNames,"Aatrox")).toStrictEqual(expectNames)
  })
});

describe('filterCards', () => {
  it('Es una funcion que filtra la data que va en las tarjetas', () => {
    expect(typeof filterCards).toBe('function');
  });
  let expectArrayNames = [{name: "Ahri", title: "the Nine-Tailed Fox"},{name: "Akali",title: "the Fist of Shadow"}];
  it('deberia retornar la informacion solicitada de la data', () => {
    expect(filterCards(expectArrayNames,"Ahri")).toEqual([{name: "Ahri", title: "the Nine-Tailed Fox"}]);
  })
});
