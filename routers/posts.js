// importo express
const express = require("express");

// creo l'istanza
const router = express.Router();

// importo il controller
const postsController = require("../controllers/posts")




// CREO LE ROTTE

// index
router.get("/", postsController.index);

// show
router.get("/:id", postsController.show);



// esporto l'istanza
module.exports = router;