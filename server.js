// IMPORTAZIONI
// express
const express = require('express');
//dotenv
const dotenv = require('dotenv').config();
// controllers
const postsController = require("./controllers/posts");
const homeController = require("./controllers/home");

// creiamo l'istanza di express
const app = express();

// configuro i file statici
app.use(express.static("public"));

// usiamo la nostra istanza per definire le rotte
app.get("/", homeController.index);
app.get("/about", homeController.about);
app.get("/contacts", homeController.contacts);

app.get("/posts", postsController.index);

// avviamo il nostro server mettendolo in ascolto
app.listen(process.env.PORT || 3001, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
})