import mongoose, { Schema } from "mongoose";

const messageSchema = mongoose.Schema(
  {
    chat: {
      type: Schema.Types.ObjectId,
      ref: "Chat",
    },
    _id: {
      type: UUID,
      requied: true,
    },
    sender_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
      required: true,
    },
    messageType: {
      type: String,
      required: true,
    },
    readStatus: {
      type: Boolean,
      required: true,
    },
    deletedAt: {
      type: Date,
    },
    modifiedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

export const Message = mongoose.model("Message", messageSchema);
