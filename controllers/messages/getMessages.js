// In your main file
const { Op } = require("sequelize");
const { Message } = require("../../models");
const redisClient = require("../../config/redis");

const key = "users";
const expirySeconds = 9000;

const intializeRedis = async () => {
  let messages = await gettingAllMessages();
  if (messages) {
    const isCreate = await storeMessagesInRedis(key, messages, expirySeconds);
    return isCreate;
  }
};

const destructureRedisSave = async () => {
  const getMessagesFromRedSave = await redisClient.get("message_data");
  if (getMessagesFromRedSave == null) return null;
  const objectStrings = getMessagesFromRedSave.split("{");
  if (objectStrings.length == 1) return objectStrings;
  const objects = await objectStrings
    .slice(1, objectStrings.length)
    .map((objectString) => {
      console.log("--->||", objectString);
      if (objectString != null) return JSON.parse("{" + objectString);
    });
  return objects;
};

const getMessagesFromAndTo = async (messages, from, to) => {
  const filteredMessages = messages.filter((message) => {
    return message.from === from && message.to === to;
  });

  return filteredMessages;
};
const getMessagesFromAndToSave = async (messages, from, to) => {
  let filteredMessages = [];
  messages.map((message) => {
    if (
      (message.from === from && message.to === to) ||
      (message.to === from && message.from === to)
    )
      filteredMessages.push(message);
  });

  return filteredMessages;
};
const getMessages = async (req, res) => {
  try {
    const receiverId = req.params.toId;
    const senderId = req.user.id;
    const expirySeconds = 900;
    const getMesFromRed = await fetchMessagesFromRedis("users");
    const parsedMessages = await destructureRedisSave();
    // if (!getMesFromRed) {
    //   await intializeRedis();
    //   const mess = await getMessagesFromAndTo(
    //     getMesFromRed,
    //     senderId,
    //     receiverId
    //   );
    //   res.status(200).send(mess);
    // }
    const mess = await getMessagesFromAndToAwais(
      parsedMessages,
      senderId,
      receiverId
    );
    res.status(200).send(mess);
  } catch (error) {
    console.error("Error retrieving messages:", error);
    return res
      .status(500)
      .send({ success: false, error: "Internal server error." });
  }
};

// getting all the messages from the database

const gettingAllMessages = async () => {
  return Message.findAll();
};

// Function to get messages from Redis
const fetchMessagesFromRedis = async (key) => {
  try {
    console.log("successfully fetched the messages from redis");
    return await redisClient.get(key);
  } catch (error) {
    console.error("Error retrieving messages from Redis:", error);
    throw error;
  }
};

// Function to store messages in Redis
const storeMessagesInRedis = async (key, messages, expirySeconds) => {
  try {
    //const latestMessages = messages.slice(-2);
    await redisClient.set(key, JSON.stringify(messages));
    await redisClient.expire(key, expirySeconds);
    console.log("Messages stored in Redis successfully");
  } catch (error) {
    throw error;
  }
};

module.exports = { getMessages };
