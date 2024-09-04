import express from "express";
const router = express.Router();
// Message Management
router.post("/chats/:chatId/messages"); // Send a new message in a chat
router.get("/chats/:chatId/messages"); // Get messages in a chat (with pagination support)
router.put("/messages/:messageId"); // Edit a message
router.delete("/messages/:messageId"); // Delete a message

// Message Interactions
router.post("/messages/:messageId/reply"); // Reply to a specific message
router.post("/messages/:messageId/forward"); // Forward a message to another chat
router.post("/messages/:messageId/reaction"); // Add a reaction to a message
router.delete("/messages/:messageId/reaction/:reactionId"); // Remove a reaction from a message

// Advanced Message Features
router.post("/messages/:messageId/speech-to-text"); // Convert voice message to text
router.post("/messages/:messageId/translate"); // Translate a message content to another language
