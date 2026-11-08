import mongoose from "mongoose";

const placeSchema = new mongoose.Schema(
  {
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    address: { type: String, required: true },
    lat: Number,
    lng: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Place", placeSchema);