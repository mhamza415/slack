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

const gettingAllMessages = async () => {
  return Message.findAll();
};

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

module.exports = { intializeRedis };
