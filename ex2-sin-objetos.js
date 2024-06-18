const students = [
  "Albertina",
  "Katerina",
  "Ester",
  "Galis",
  "Oriol",
  "Susana",
  "McCarmen",
  "Gerard",
  "Dayane",
  "Susana",
  "Diego",
  "Maria",
];

// Resultado esperado: https://oscarm.tinytake.com/msc/ODg4Njg3NV8yMjM0MDcwNg

// Utiliza el método forEach para mostrar cada elemento del array por la consola

// Utiliza el método findIndex para encontrar que índica ocupa el string "Maria"

// Utiliza el método some para saber si en este array existe la alumna "Katerina"

// Utiliza el método find para saber el primer nombre que tiene 5 o menos carácteres

// Utiliza el método every para comprobar si todos los strings de este array tienen 4 o más carácteres

// Utiliza el método filter para obtener un nuevo array que solo incluya aquellos nombres que contengan la letra i

// Utiliza el método map para obtener un nuevo array donde aparezca solamente la primera inicial de cada nombre

console.log('Ejercicio 1: ');
students.forEach(s => console.log(s));

const iMaria = students.findIndex(s => s == "Maria");
console.log('ejercicio 2: ', iMaria);

const siHay = students.some(s => s == "Katerina");
console.log('ejercicio 3: ', siHay);

const largo5= students.find(s => s.length <= 5);
console.log('Ejercicio 4: ', largo5);

const largoNombres = students.every(s => s.length >= 4);
console.log('Ejercicio 5: ', largoNombres);

const nombresConI = students.filter (s => s.includes('i'));
console.log('Ejercicio 6: ', nombresConI);

const inicial = students.map( s => s[0]);
console.log('ejercicio 7: ', inicial);