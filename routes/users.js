const usersRouter = require("express").Router();

const {
  sendAllUsers,
  sendUserCreated,
  sendUserById,
  sendUserUpdated,
} = require("../controllers/users");
const {
  findAllUsers,
  createUser,
  findUserById,
  updateUser,
} = require("../middlewares/users");

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.post("/users", createUser, sendUserCreated);
usersRouter.put(
  "/users/:id", // Слушаем запросы по эндпоинту
  updateUser, // Обновляем запись в MongoDB
  sendUserUpdated // Возвращаем ответ на клиент
);

module.exports = usersRouter;
