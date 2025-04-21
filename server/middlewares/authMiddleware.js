const jwt = require("jsonwebtoken");
const ApiError = require("../utils/ApiError");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json(new ApiError(401, "Access denied. No token provided."));
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json(new ApiError(401, "Invalid or expired token."));
  }
};

module.exports = authMiddleware;
