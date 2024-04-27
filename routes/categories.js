const categoriesRouter = require("express").Router();

const sendAllCategories = require('../controllers/categories');

categoriesRouter.get("/categories", sendAllCategories);

module.exports = categoriesRouter;
