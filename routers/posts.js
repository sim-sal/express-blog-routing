// importo express
const express = require("express");

// creo l'istanza
const router = express.Router();

// importo il controller
const postsController = require("../controllers/postsController")




// CREO LE ROTTE

// index
router.get("/", postsController.index);

// show
router.get("/:id", postsController.show);

// create
router.post("/create", postsController.create);

// download immagine
// router.get("/:id/download", postsController.show);
router.get("/:slug/download", postsController.downloadImg);




// esporto l'istanza
module.exports = router;