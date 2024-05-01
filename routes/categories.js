const categoriesRouter = require("express").Router();

const {
  sendAllCategories,
  sendCategoryCreated,
  sendCategoryById,
} = require("../controllers/categories");
const {
  findAllCategories,
  createCategory,
  findCategoryById,
} = require("../middlewares/categories");

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.post("/categories", createCategory, sendCategoryCreated);

module.exports = categoriesRouter;
