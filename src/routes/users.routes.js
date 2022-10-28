const { Router, response } = require("express");
const UsersController = require("../controllers/UsersController");
const usersRoutes = Router();
const UserAvatarController = require("../controllers/UserAvatarController");

const uploadConfig = require("../configs/upload");
const usersController = new UsersController();
const ensureAuthenticated = require("../middleware/ensureAuthenticated");
const multer = require("multer");
const userAvatarController = new UserAvatarController();
const upload = multer(uploadConfig.MULTER);
usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);
usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  upload.single("avatar"),
  userAvatarController.update
);
module.exports = usersRoutes;
