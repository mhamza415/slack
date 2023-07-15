const connection = require("../services/redisClient")

async function redisConnection(req, res) {
    try {

        if (connection) {
            console.log(`Redis connected successfully`.cyan.underline.bold);
        } else {
            throw new Error(`Connection failed`.red.bold);
        }
    } catch (error) {
        console.error(error);
    }
}



module.exports = redisConnection;