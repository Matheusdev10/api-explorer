const path = require("path");
const multer = require("multer");
const crypto = require("crypto");
//TMP_FOLDER É ONDE A IMG CHEGA
const TMP_FOLDER = path.resolve(__dirname, "..", "..", "tmp");

//UPLOADS_FOLDER É ONDE A IMG VAI FICAR
const UPLOADS_FOLDER = path.resolve(TMP_FOLDER, "uploads");

const MULTER = {
  storage: multer.diskStorage({
    destination: TMP_FOLDER,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString("hex");
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    }
  })
};

module.exports = {
  TMP_FOLDER,
  UPLOADS_FOLDER,
  MULTER
};
