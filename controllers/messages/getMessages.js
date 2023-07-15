const { client } = require("../../services/redisClient");
const connection = require("../../services/redisClient")

async function getMessages(req, res) {
    try {

        if (connection) {
            console.log("Redis connected successfully");
        } else {
            throw new Error("Connection failed");
        }
    } catch (error) {
        console.error(error);
    }
}



module.exports = getMessages;
