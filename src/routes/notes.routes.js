const { Router } = require("express");
const NotesController = require("../controllers/NotesController");
const notesRoutes = Router();
const notesController = new NotesController();
const ensureAuthenticated = require("../middleware/ensureAuthenticated");
// notesRoutes.use(ensureAuthenticated);
notesRoutes.get("/", ensureAuthenticated, notesController.index);
notesRoutes.post("/", ensureAuthenticated, notesController.create);
notesRoutes.get("/:id", ensureAuthenticated, notesController.show);
notesRoutes.delete("/:id", ensureAuthenticated, notesController.delete);

module.exports = notesRoutes;
