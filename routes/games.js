const gamesRouter = require("express").Router();

const {
  sendAllGames,
  sendGameCreated,
  sendGameById,
  sendGameUpdated,
} = require("../controllers/games");
const {
  findAllGames,
  createGame,
  findGameById,
  updateGame,
} = require("../middlewares/games");

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.post("/games", createGame, sendGameCreated);
gamesRouter.put(
  "/games/:id", // Слушаем запросы по эндпоинту
  findGameById, // Шаг 1. Находим игру по id из запроса
  // Шаг 2. Проверки, если нужны
  updateGame, // Шаг 3. Обновляем запись с игрой
  sendGameUpdated // Шаг 4. Возвращаем на клиент ответ с результатом обновления
);

module.exports = gamesRouter;
