import mongoose, { Schema } from "mongoose";

const chatSchema = mongoose.Schema(
  {
    room: {
      type: Schema.Types.ObjectId,
      ref: "Room",
    },
    parent: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      trim: true,
      lowercase: true,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Chat = mongoose.model("Chat", chatSchema);
