const checkInput = (req, res, next) => {
  for (const property in req.body) {
    return req.body[property] === ""
      ? res.status(403).json({ message: "Please provide valid information" })
      : next();
  }
};

module.exports = {
  checkInput,
};
