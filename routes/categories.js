const categoriesRouter = require("express").Router();

const {
  sendAllCategories,
  sendCategoryCreated,
  sendCategoryById,
  sendCategoryUpdated,
  sendCategoryDeleted,
} = require("../controllers/categories");
const {
  findAllCategories,
  createCategory,
  findCategoryById,
  updateCategory,
  deleteCategory,
} = require("../middlewares/categories");

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.post("/categories", createCategory, sendCategoryCreated);
categoriesRouter.put(
  "/categories/:id", // Слушаем запросы по эндпоинту
  updateCategory, // Обновляем запись в MongoDB
  sendCategoryUpdated // Возвращаем ответ на клиент
);
categoriesRouter.delete("/categories/:id", deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;
