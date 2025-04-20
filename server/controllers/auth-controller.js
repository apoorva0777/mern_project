const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome Apoorva Shukla using router");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    const newUser = await User.create({ username, email, phone, password });

    const token = await newUser.generateToken();
    console.log("Generated Token:", token); 

    res.status(201).json({
      msg: "User registered successfully",
      user: newUser,
      token,
      userId: newUser._id.toString(),
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Registration failed" });
  }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, userExist.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = await userExist.generateToken();

    res.status(200).json({
      msg: "Login successful",
      user: userExist,
      token,
      userId: userExist._id.toString(),
    });
  } catch (error) {
    next(error);
  }
};





module.exports = { home, register,login };
