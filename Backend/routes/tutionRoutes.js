const express = require("express");
const { getAllPosts, createPost } = require("../controllers/tutionController");
const router = express.Router();

// Define routes for tuition-related operations
// Example routes for getting all posts and creating a new post
router.get("/", getAllPosts);
router.post("/", createPost);

module.exports = router;
