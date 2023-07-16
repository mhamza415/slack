// In your main file
const { Op } = require("sequelize");
const { Message } = require("../../models");
const redisClient = require("../../config/redis");

// Controller for fetching the messages and sending the response
const getMessages = async (req, res) => {
  try {
    const receiverId = req.params.toId;
    const senderId = req.user.id;
    const messagesCacheKey = `messages:${senderId}:${receiverId}`;

    const redisResponse = await getMessagesFromRedis(messagesCacheKey);
    if (redisResponse) {
      const parsedMessages = JSON.parse(redisResponse);
      return res.status(200).json(parsedMessages);
    }

    console.log("not getting response from redisResponse");
    const messages = await getMessageFromDatabase(senderId, receiverId);
    if (messages.length === 0) {
      return res
        .status(404)
        .send({ success: false, message: "No messages available" });
    }

    await storeMessagesInRedis(messagesCacheKey, messages);
    return res.status(200).json({
      success: true,
      message: "successfully stored the message from redis",
    });
  } catch (error) {
    console.error("Error retrieving messages:", error);
    return res
      .status(500)
      .send({ success: false, error: "Internal server error." });
  }
};

// Sequelize ORM query for fetching the one-to-one conversation messages
const getMessageFromDatabase = async (senderId, receiverId) => {
  return Message.findAll({
    where: {
      [Op.or]: [
        { from: senderId, to: receiverId },
        { from: receiverId, to: senderId },
      ],
    },
  });
};

// Function to get messages from Redis
const getMessagesFromRedis = async (key) => {
  try {
    console.log("successfully fetched the messages from redis");
    return await redisClient.get(key);
  } catch (error) {
    console.error("Error retrieving messages from Redis:", error);
    throw error;
  }
};

// Function to store messages in Redis
const storeMessagesInRedis = async (key, messages) => {
  try {
    const latestMessages = messages.slice(-2);
    await redisClient.set(key, JSON.stringify(latestMessages));
    console.log("Messages stored in Redis successfully");
  } catch (error) {
    throw error;
  }
};

module.exports = { getMessages };
