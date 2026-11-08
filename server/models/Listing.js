import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    type: { type: String, required: true },
    mode: { type: String, enum: ["rent", "sale"], required: true },
    price: { type: Number, required: true },
    area: { type: String, required: true },
    photoUrl: String,
  },
  { timestamps: true }
);

export default mongoose.model("Listing", listingSchema);