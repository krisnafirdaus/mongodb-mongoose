const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MahasiswaSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  nim: {
    type: String,
    default: true,
  },
  dateOfEntry: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = Item = mongoose.model("mahasiswa", MahasiswaSchema);
