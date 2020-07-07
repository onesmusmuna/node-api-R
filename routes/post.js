const express = require("express");

const { homeGetPosts, createPost } = require("../controllers/post.js");
const { createPostValidator } = require("../validator/index.js");

const router = express.Router();

router.get("/", homeGetPosts);
router.post("/post", createPostValidator, createPost);

module.exports = router;
