const User = require("../models/User");
const ApiError = require("../utils/ApiError");
const bcrypt = require("bcryptjs");
const ApiResponse = require("../utils/ApiResponse");
require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    if (!username || !password || !email) {
      return res
        .status(400)
        .json(new ApiError(400, "Please enter the required fields."));
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return res
        .status(409)
        .json(
          new ApiError(
            409,
            `${email} has already registered. Would you like to try login?`
          )
        );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    return res
      .status(201)
      .json(new ApiResponse(201, "User registered", { userId: newUser._id }));
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json(
        new ApiError(500, "Internal Server Error, please try again later.")
      );
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json(new ApiError(401, "Authentication failed!"));
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json(new ApiError(401, "Authentication failed!"));
    }

    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    return res.status(200).json(
      new ApiResponse(200, `Welcome, ${username}`, {
        token: accessToken,
        user: {
          _id: user._id,
          username: user.username,
          email: user.email,
        },
      })
    );
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json(
        new ApiError(500, "Internal Server Error, please try again later.")
      );
  }
};
