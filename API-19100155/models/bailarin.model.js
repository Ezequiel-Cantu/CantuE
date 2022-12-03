import mongoose from "mongoose";

const bailarinSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    dance: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      trim: true,
    },
    image: {
      secure_url: String,
      public_id: String
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Bailarin", bailarinSchema);