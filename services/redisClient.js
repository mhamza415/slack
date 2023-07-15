const redis = require("redis");
const redisclient = redis.createClient();

(async function getMessages() {
  console.log("Connecting to Redis...");
})();

redisclient.on("ready", () => {
  console.log("Connected to Redis!");
});

redisclient.on("error", (err) => {
  console.log("Error in Redis connection:", err);
});
