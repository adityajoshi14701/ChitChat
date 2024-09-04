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
    lastMessage: {
      type: Schema.Types.ObjectId,
      ref: "Message",
    },
    unreadCount: {
      type: Number,
      default: 0,
    },
    isPinned: {
      type: Boolean,
      default: false,
    },
    mutedUntil: {
      type: Date,
    },
    isArchived: {
      type: Boolean,
      default: false,
    },
    chatType: {
      type: String,
      enum: ["individual", "group"],
      required: true,
    },
    media: [
      {
        type: Schema.Types.ObjectId,
        ref: "Media",
      },
    ],
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const Chat = mongoose.model("Chat", chatSchema);
