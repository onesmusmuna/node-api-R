exports.homeGetPosts = (req, res) => {
  res.json({
    posts: [
      { title: "Post One" },
      { title: "Post Two" },
      { title: "Post Three" },
      { title: "Post Four" },
    ],
  });
};
