const router = require("express").Router();
const registerController = require("../../controllers/registerController");

// Matches with "/api/books"
router.route("/")
 .get(registerController.findAll)
 .post(registerController.create);
// Matches with "/api/books/:id"
router
 .route("/:id")
 .get(registerController.findById)
 .put(registerController.update)
 .delete(registerController.remove);
module.exports = router;