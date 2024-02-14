const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/helper/generateToken");



const signupUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    if (newUser) {
      res.status(201).json({
        message: "User created successfully",
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log("Error in signupUser: ", error.message);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    const isPassword = await bcrypt.compare(password, user?.password || "");

    if (!user || !isPassword) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    const token = generateToken(user._id, res);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    token,

    });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log("Error in loginUser: ", error.message);
  }
};

const logoutUser = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 1 });
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error in logoutUser: ", error.message);
  }
};

module.exports = { signupUser, loginUser, logoutUser };