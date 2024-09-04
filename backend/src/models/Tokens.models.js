import mongoose from "mongoose";

const tokensSchema = mongoose.Schema(
  {
    accessToken: {
      type: String,
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export const Tokens = mongoose.model("Tokens", tokensSchema);
