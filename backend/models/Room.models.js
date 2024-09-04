import mongoose, { Schema } from "mongoose";

const roomSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    members: [
      {
        userId: {
          type: Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        role: {
          type: String,
          enum: ["admin", "member"],
          default: "member",
        },
        joinedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    groupIcon: {
      type: String, // URL to the group's icon image
    },
    isPublic: {
      type: Boolean,
      default: false,
    },
    lastMessage: {
      type: Schema.Types.ObjectId,
      ref: "Message",
    },
    pinnedMessages: [
      {
        type: Schema.Types.ObjectId,
        ref: "Message",
      },
    ],
    isMuted: {
      type: Boolean,
      default: false,
    },
    invitationLink: {
      type: String, // URL for group invitation
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

export const Room = mongoose.model("Room", roomSchema);
