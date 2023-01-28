import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
      default: 1,
    },
    username: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Review", ReviewSchema);
