const mongoose = require("mongoose");

// schema
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
});

// model
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
