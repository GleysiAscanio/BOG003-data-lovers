import { filterData, anotherExample } from '../src/data.js';


describe('filterData', () => {
  it('Es una función que filtra la data según un parámetro', () => {
    expect(typeof filterData).toBe('function');
  });

  it('deberia retornar ', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
