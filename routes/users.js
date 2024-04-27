const usersRouter = require("express").Router();

const sendAllUsers = require("../controllers/users");

usersRouter.get("/users", sendAllUsers);

module.exports = usersRouter;
