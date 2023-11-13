// IMPORTAZIONI
// express
const express = require('express');
//dotenv
const dotenv = require('dotenv').config();
// controllers
const homeController = require("./controllers/home");
// router
const postsRouter = require("./routers/posts");

// creiamo l'istanza di express
const app = express();

// configuro i file statici
app.use(express.static("public"));

// usiamo la nostra istanza per definire le rotte
app.get("/", homeController.index);
app.get("/about", homeController.about);
app.get("/contacts", homeController.contacts);

app.use("/posts", postsRouter);

// avviamo il nostro server mettendolo in ascolto
app.listen(process.env.PORT || 3001, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
})