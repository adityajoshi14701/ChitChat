import express from "express";
const router = express.Router();
// Chat Management
router.get("/chats/:chatId"); // Get details of a chat (1:1 or group)
router.put("/chats/:chatId"); // Update chat details (e.g., pin/unpin, mute/unmute)
router.delete("/chats/:chatId"); // Delete a chat

// Additional Chat Functionality
router.post("/chats/:chatId/share-location"); // Share your current location in a chat
router.get("/chats/:chatId/locations"); // Get shared locations in a chat
