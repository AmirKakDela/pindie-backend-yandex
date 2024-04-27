const sendAllGames = (req, res) => {
  console.log(req.gamesArray);
  // req.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.gamesArray));
};

module.exports = sendAllGames;
