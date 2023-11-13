// IMPORTAZIONI
// modulo fs
const fs = require("fs");
// array del db
const listaPosts = require("./db/db");

// inizializzo variabile id
let id = 0;

const nuovaLista = listaPosts.map(post => ({
    id: id++,
    ...post,
    updatedAt: new Date().toDateString()
}));

// Creo un nuovo array per mantenere la struttura originale
const nuovoModulo = [
    ...nuovaLista,
];

fs.writeFileSync("./db/db.js", "const posts = " + JSON.stringify(nuovoModulo, null, 2) + "; module.exports = posts;");