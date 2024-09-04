import mongoose, { Schema } from "mongoose";

const profileSchema = mongoose.Schema(
  {
    status: {
      type: String,
    },
    profilePicture: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    bio: {
      type: String,
      trim: true,
    },
    theme: {
      type: String, // 'light', 'dark', etc.
      default: "light",
    },
    lastUpdated: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const Profile = mongoose.model("Profile", profileSchema);
