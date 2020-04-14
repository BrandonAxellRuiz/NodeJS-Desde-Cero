const hbs = require('hbs');

//helpers
hbs.registerHelper('getAnio', () => new Date().getFullYear());

hbs.registerHelper('capitalizar', (texto) => texto.split(' ').map((e, idx) => e[idx] = e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join(' ')); 
