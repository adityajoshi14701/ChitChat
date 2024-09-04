import express from "express";
const router = express.Router();
// Group Chat (Room) Management
router.post("/rooms"); // Create a new group chat
router.get("/rooms/:roomId"); // Get details of a group chat
router.put("/rooms/:roomId"); // Update group chat details
router.delete("/rooms/:roomId"); // Delete a group chat

// Group Membership Management
router.post("/rooms/:roomId/members"); // Add members to a group chat
router.delete("/rooms/:roomId/members/:userId"); // Remove a member from a group chat
router.put("/rooms/:roomId/members/:userId/role"); // Change a member's role (admin/member)

// Group Chat Actions
router.post("/rooms/:roomId/pin-message"); // Pin a message in the group chat
router.delete("/rooms/:roomId/unpin-message/:messageId"); // Unpin a message in the group chat
router.post("/rooms/:roomId/mute"); // Mute notifications for the group chat
router.post("/rooms/:roomId/unmute"); // Unmute notifications for the group chat
