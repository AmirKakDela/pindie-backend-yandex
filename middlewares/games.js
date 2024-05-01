const games = require("../models/game");

const findAllgames = async (req, res, next) => {
  req.gamesArray = await games
    .find({})
    .populate("categories")
    .populate("users");
  next();
};

module.exports = findAllgames;
