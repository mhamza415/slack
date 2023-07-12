const { User } = require("../../models");
const validator = require("validator");
const generateToken = require("../../utils/generateToken");
const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!validator.isEmail(email)) {
      res.status(404).send({ success: false, message: "email is not valid" });
    }
    if (!otp) {
      res.status(404).send({ success: false, message: "otp cannot be null" });
    }
    const user = await User.findOne({ where: { email: email } });
    //console.log("user", user);
    if (!user) {
      res.status(404).send({ success: false, message: "user is invalid" });
    }
    let currentTime = new Date();
    //console.log(user.otp);
    //console.log(user.otp_expires);
    if (user && user.otp === otp && currentTime < user.otp_expires) {
      res.status(201).json({
        id: user.id,
        email: user.email,
        role: user.role,
        token: generateToken(),
      });
    } else {
      res
        .status(404)
        .send({ success: false, message: "otp is expired or incorrect" });
    }
  } catch (error) {
    res.status(404).send({ success: false, err: error });
  }
};

module.exports = { verifyOtp };
