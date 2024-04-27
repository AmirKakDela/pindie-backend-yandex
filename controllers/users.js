const sendAllUsers = (req, res) => {
  req.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.usersArray));
};

module.exports = sendAllUsers;
