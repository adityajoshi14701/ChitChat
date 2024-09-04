import mongoose, { Schema } from "mongoose";

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  statusMessage: {
    type: String,
    trim: true,
  },
  isOnline: {
    type: Boolean,
    default: false,
  },
  contacts: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  blockedUsers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  authProviders: [
    {
      providerName: String,
      providerId: String,
    },
  ],
  tokens: {
    type: Schema.Types.ObjectId,
    ref: "Tokens",
  },
  profile: {
    type: Schema.Types.ObjectId,
    ref: "Profile",
  },
  lastSeen: {
    type: Date,
    required: true,
  },
});

export const User = mongoose.model("User", userSchema);
