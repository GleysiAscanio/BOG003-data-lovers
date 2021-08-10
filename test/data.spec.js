import { filterData, sortByNames, filterCards, levelDifficulty } from '../src/data.js';


describe('filterData', () => {
  it('Es una función que filtra la data según roles', () => {
    expect(typeof filterData).toBe('function');
  })
  let expectArrayRol = [{name: "Aatrox", tags: ["Fighter", "Tank"]},{name: "Ahri",tags: ["Mage", "Assassin"]}];
  it('deberia retornar los tags de los Campeones', () => {
    expect(filterData(expectArrayRol,"Fighter")).toEqual([{name: "Aatrox", tags: ["Fighter", "Tank"]}])
  })
});

 describe('sortByNames', () =>{
  it('Es una función que ordena la data alfabeticamente y al inverso', ()=>{
    expect(typeof sortByNames).toBe('function');
  })
  let  expectOrderNames=[{name:"Aatrox"},{name:"Brand"},{name:"Camille"}];
  it('deberia retornar el arreglo de campeones en orden alfabetico',()=>{
   expect(sortByNames(expectOrderNames,"AZ")).toStrictEqual([{name:"Aatrox"},{name:"Brand"},{name:"Camille"}]) 
  })
  let  expectReverseNames=[{name:"Zyra"},{name:"Yorick"},{name:"Xin Zhao"}];
  it('deberia retornar el arreglo de campeones en orden alfabetico',()=>{
   expect(sortByNames(expectReverseNames,"ZA")).toEqual(expectReverseNames) 
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


describe('levelDifficulty', () => {
  it('Es una Funcion que filtra la data que va en las tarjetas', ()=>{
    expect(typeof levelDifficulty).toBe('function');
  });
  it('Deberia retornar la difficultad de los campeones', ()=> {
    let expectDifficulty = [{info:{difficulty: 1}},{info:{difficulty: 2}}, {info:{difficulty: 3}}];
    expect(levelDifficulty(expectDifficulty, 1)).toStrictEqual([{info:{difficulty: 1}}])
  });
});