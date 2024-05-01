const usersRouter = require("express").Router();

const {
  sendAllUsers,
  sendUserCreated,
  sendUserById,
} = require("../controllers/users");
const {
  findAllUsers,
  createUser,
  findUserById,
} = require("../middlewares/users");

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.post("/users", createUser, sendUserCreated);

module.exports = usersRouter;
