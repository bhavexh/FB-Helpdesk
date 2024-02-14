const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config();

const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  return token;
};

module.exports = generateToken;