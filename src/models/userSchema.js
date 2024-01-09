import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
});

const Users = mongoose.models.Users || mongoose.model("Users", userSchema);

export default Users;
