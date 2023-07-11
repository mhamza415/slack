const { User } = require("/Users/ubaidurrehman/slack/models");

async function registerUser(req, res) {
  res.send("you are in user controller");
}

// logincontroller
const loginController = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email) {
      res.status(401).send({ status: false, message: "Email cannot null" });
    }
    const user = User.findOne({ where: { email: email } });
    if (!user) {
      res.status(401).send({ success: false, message: "user not found" });
    }
  } catch (error) {
    res.status(401).send({ status: false, message: "Invalid User" });
  }
};

module.exports = { registerUser, loginController };
