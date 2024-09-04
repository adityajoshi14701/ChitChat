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
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};
userSchema.methods.genereateAccessToken = async function () {
  const token = jwt.sign({ id: this._id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "15minutes",
  });
  return token;
};
userSchema.methods.genereateRefreshToken = async function () {
  const token = jwt.sign({ id: this._id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "15minutes",
  });
  return token;
};
export const User = mongoose.model("User", userSchema);
