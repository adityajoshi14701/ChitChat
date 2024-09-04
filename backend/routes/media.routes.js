import express from "express";
const router = express.Router();
// Media Management
router.post("/media/upload"); // Upload media (images, videos, voice messages, etc.)
router.get("/media/:mediaId"); // Retrieve media
router.delete("/media/:mediaId"); // Delete media
