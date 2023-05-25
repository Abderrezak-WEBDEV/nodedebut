//imports
const router = require("express").Router();
const controllers = require("./controllers.js");
//const {hello, multiple} = require("./controllers.js");
// on peut l'ecrire de cette maniere , mais faut enlever controller sur les routes
//destination
router.get("/", (controllers.hello));
    //hello : est le nom de la fonction de mon controller
// si l'utiisateur met un nbre sur la barre d'url
router.get('/:nb', (controllers.multiple))
//export
module.exports = router;