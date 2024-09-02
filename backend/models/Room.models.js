import mongoose from "mongoose";

const roomSchema = mongoose.Schema({});

export const Room = mongoose.model("Chat", roomSchema);
