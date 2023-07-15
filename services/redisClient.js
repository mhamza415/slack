
const { createClient } = require('redis');

const client = createClient({
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
  }
});

(async () => {
  console.log("Connecting to Redis...");
})();

client.on("ready", () => {
  console.log("Connected to Redis!");
});

client.on("error", (err) => {
  console.log("Error in Redis connection:", err);
});


// const redis = require("redis");
// const redisclient = redis.createClient();

// (async function getMessages() {
//   console.log("Connecting to Redis...");
// })();

// redisclient.on("ready", () => {
//   console.log("Connected to Redis!");
// });

// redisclient.on("error", (err) => {
//   console.log("Error in Redis connection:", err);
// });
