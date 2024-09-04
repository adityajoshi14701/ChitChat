import express from "express";
const router = express.Router();
// Profile Management
router.get("/profiles/:profileId"); // Get a user’s profile details
router.put("/profiles/:profileId"); // Update a user’s profile (e.g., profile picture, bio, theme)
router.delete("/profiles/:profileId"); // Delete a user’s profile
