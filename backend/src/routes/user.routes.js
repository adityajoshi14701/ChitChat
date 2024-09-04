import express from "express";
const router = express.Router();

// User Registration & Authentication
router.post("/user/register"); // Register a new user
router.post("/user/login"); // Log in an existing user
router.post("/user/logout"); // Log out the current user
router.post("/user/reset-password"); // Send password reset instructions
router.post("/user/reset-password/confirm"); // Confirm password reset with token

// User Profile Management
router.get("/user/:userId"); // Get a user's profile
router.put("/user/:userId"); // Update a user's profile
router.delete("/user/:userId"); // Delete a user

// Contacts & Block Management
router.get("/user/:userId/contacts"); // Get the user's contact list
router.post("/user/:userId/contacts"); // Add a contact to the user's contact list
router.delete("/user/:userId/contacts/:contactId"); // Remove a contact from the user's contact list
router.post("/user/:userId/block"); // Block a user
router.post("/user/:userId/unblock"); // Unblock a user

// User Status & Online Information
router.post("/user/:userId/status"); // Update the user's status message
router.get("/user/:userId/online-status"); // Get the user's online status

// Theme & Display Preferences
router.put("/users/:userId/theme"); // Change the theme (light/dark) for a user’s profile
