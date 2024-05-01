const usersRouter = require("express").Router();

const { sendAllUsers, sendUserCreated } = require("../controllers/users");
const { findAllUsers, createUser } = require("../middlewares/users");

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.post("/users", createUser, sendUserCreated);

module.exports = usersRouter;
