/*
 *Se ordenan array de numeros de menor a mayor
 */

const arrayNumber = [3, 4, 4, 34, 667, 3, 7, 8, 1, 2, 4];

let arrayOrderNumber = arrayNumber.sort((a, b) => a - b);

console.log(arrayOrderNumber);

/*
 * Se ordenan array de numeros de mayor a menor
 */

const arrayNumber2 = [3, 4, 4, 34, 667, 3, 7, 8, 1, 2, 4];

let arrayOrderNumber2 = arrayNumber2.sort((a, b) => b - a);

console.log(arrayOrderNumber2);

/*
 * Se ordenan array en orden alfabetico
 */

const arrayLetras = [
  'Perro',
  'Gato',
  'Pajaro',
  'Raton',
  'Abeja',
  'Armadillo',
  'Sapo',
];

let arrayOrderAlfabetico = arrayLetras.sort((a, b) => {
  a = a.toLowerCase();
  b = b.toLowerCase();

  if (a > b) {
    return 1;
  }

  if (a < b) {
    return -1;
  }

  return 0;
});

console.log(arrayOrderAlfabetico);

/*
 *Ordeja objetos personas en orden alfabetico y de menor a mayor edad
 */

const personas = [
  {
    name: 'Manuel',
    age: 14,
  },
  {
    name: 'Luis',
    age: 2,
  },
  {
    name: 'Juan',
    age: 35,
  },
  {
    name: 'Camilo',
    age: 45,
  },
  {
    name: 'Alex',
    age: 43,
  },
  {
    name: 'Julian',
    age: 23,
  },
  {
    name: 'Andres',
    age: 14,
  },
  {
    name: 'Daniel',
    age: 34,
  },
  {
    name: 'Manuel',
    age: 13,
  },
];

const arrayOrderByNameAndAge = personas.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }

  if (a.name < b.name) {
    return -1;
  }

  if (a.age > b.age) {
    return 1;
  }

  if (a.age < b.age) {
    return -1;
  }

  return 0;
});

console.log(arrayOrderByNameAndAge);
