const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

mongoose.models = {};

export default mongoose.model("register", RegisterSchema);
