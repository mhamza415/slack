const redis = require('redis');
const client = redis.createClient();

client.on('error', (err) => {
  console.error('Redis error:', err);
});

// Export the Redis client to be used in other files
module.exports = client;

// Import and start your server or application
// const app = require('./app');
// app.start();
