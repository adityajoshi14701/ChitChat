import mongoose, { Schema } from "mongoose";

exports.profileSchema = Schema(
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
  },
  { timestamps: true }
);
