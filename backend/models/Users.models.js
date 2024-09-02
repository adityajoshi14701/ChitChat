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

  passwordResetToken: {
    type: String,
    required: true,
  },
  passwordResetExpires: {
    type: Date,
    required: true,
  },
  googleString: {
    type: String,
  },
  githubString: {
    type: String,
  },
  tokens: {
    type: Schema.Types.ObjectId,
    ref: "Tokens",
  },
  profile: {
    type: Schema.Types.ObjectId,
    ref: "Profile",
  },
  lastSeen: {
    type: timestamp,
    required: true,
  },
});

export const User = mongoose.model("User", userSchema);
