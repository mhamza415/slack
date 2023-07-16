const redis = require("redis");

// Redis client initialization
const redisClient = redis.createClient({
  password: process.env.REDIS_PASSWORD,
  socket: {
    legacyMode: true,
    host: process.env.REDIS_HOST,
    port: 17651,
  },
});

(async () => {
  await redisClient.connect();
})();

console.log("connecting redis");

redisClient.on("ready", () => {
  console.log("connected to redis");
});

redisClient.on("error", (err) => {
  console.log("Error in the Redis connection:", err);
});

module.exports = redisClient;
