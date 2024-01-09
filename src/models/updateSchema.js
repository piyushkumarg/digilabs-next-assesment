import mongoose from "mongoose";

const updateSchema = new mongoose.Schema({
  logo: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    required: true,
  },
});

const Updates = mongoose.models.Update || mongoose.model("Updates", updateSchema);

export default Updates;
