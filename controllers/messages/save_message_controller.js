const { User, Message } = require("./../../models");

const saveMessageInDatabase = async (message, to, from) => {
  try {
    const toUser = await User.findByPk(to);
    const fromUser = await User.findByPk(from);
    if (!toUser || !fromUser) return false;
    const saveStatus = await Message.create({
      messages: message,
        to: toUser.id,
        from: fromUser.id,
    //   to: to,
    //   from: from,
    });
    // console.log("------->", saveStatus);
    return saveStatus ? saveStatus : false;
  } catch (error) {
    console.log("--------->Error saveMessageInDatabase");
  }
};

const sendMessage = async (req, res) => {
  try {
    // console.log("------->", req.user.id);
    const from = req.user.id;
    const { to, message } = req.body;
    // console.log("------->", to, from, message);
    if (to == undefined || message == undefined)
      return res
        .status(401)
        .send({ message: "required to userid and message" });
    // console.log("------->", to, from, message);
    const isSave = await saveMessageInDatabase(message, to, from);
    return isSave ? res.send("done") : res.send("failed");
  } catch (error) {
    console.log("--->sendMessage");
    res.status(401).send({ message: "Error to send message" });
    throw error;
  }
};
module.exports = { sendMessage };
