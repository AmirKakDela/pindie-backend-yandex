const sendAllCategories = (req, res) => {
  req.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.categoriesArray));
};

module.exports = sendAllCategories;