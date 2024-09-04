import mongoose, { Schema } from "mongoose";

const messageSchema = mongoose.Schema(
  {
    chat: {
      type: Schema.Types.ObjectId,
      ref: "Chat",
    },
    senderId: {
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
    replyTo: {
      type: Schema.Types.ObjectId,
      ref: "Message",
    },
    reactions: [
      {
        userId: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        reactionType: {
          type: String, // e.g., emoji or text
        },
      },
    ],
    mediaMetadata: {
      duration: Number, // For voice notes, videos
      dimensions: {
        width: Number,
        height: Number,
      },
    },
    forwardedFrom: {
      type: Schema.Types.ObjectId,
      ref: "Message",
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
