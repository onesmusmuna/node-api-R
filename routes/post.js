const express = require("express");

const { homeGetPosts } = require("../controllers/post.js");

const router = express.Router();

router.get("/", homeGetPosts);

module.exports = router;
