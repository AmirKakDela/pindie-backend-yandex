const gamesRouter = require("express").Router();

const sendAllGames = require('../controllers/games');

gamesRouter.get("/games", sendAllGames);

module.exports = gamesRouter;
