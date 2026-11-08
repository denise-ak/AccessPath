import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
  {
    placeId: { type: mongoose.Schema.Types.ObjectId, ref: "Place", required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    stepFree: { type: Boolean, default: false },
    elevator: { type: Boolean, default: false },
    toilets: { type: Boolean, default: false },
    parking: { type: Boolean, default: false },
    comment: String,
    photoUrl: String,
  },
  { timestamps: true }
);

export default mongoose.model("Report", reportSchema);