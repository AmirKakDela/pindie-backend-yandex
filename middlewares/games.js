const games = require("../models/game");

const findAllgames = async (req, res, next) => {
  req.gamesArray = await games.find({});
  next();
};

module.exports = findAllgames;
