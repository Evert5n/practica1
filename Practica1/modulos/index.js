// Importar las variables desde los archivos dates.js y profession.js
const { name, firstName, lastName, age } = require('./dates');
const { career } = require('./profession');

// Mostrar los datos importados
console.log(`Nombre Completo: ${name} ${lastName}`);
console.log(`Primer Nombre: ${firstName}`);
console.log(`Edad: ${age}`);
console.log(`Profesión: ${career}`);
