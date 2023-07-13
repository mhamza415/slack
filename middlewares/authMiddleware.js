const jwt = require("jsonwebtoken");
const { User } = require("../models");
const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      console.log("token" + token);
      const decoded = await jwt.verify(token, process.env.JWT_SECRET);

      if (!decoded) {
        res.status(401);
        throw new Error("You are unauthorized to make this request");
      }

      req.user = await User.findByPk(decoded.id);
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Invalid token"); // Handle the case of invalid token
    }
  } else {
    res.status(401);
    throw new Error("No token found"); // Handle the case of missing token
  }
};
module.exports = { protect };
