exports.createPostValidator = (req, res, next) => {
  // title
  req.check("title", "write a title").notEmpty();
  req.check("title", "Title must be between 3 to 150 characters").isLength({ min: 3, max: 150 });
  // body
  req.check("body", "write a body").notEmpty();
  req.check("body", "Body must be between 3 to 2000 characters").isLength({ min: 3, max: 2000 });

  // check for errors
  const errors = req.validationErrors();
  // if error, show the first on, use [] after map method to return only first error
  if (errors) {
    const firstError = errors.map((err) => err.msg)[0];
    return res.status(400).json({ error: firstError });
  }
  // proceed to next middleware
  next();
};
