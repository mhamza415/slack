const app = require("./app");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const userRoutes = require("./routes/userRoutes");
const workSpaceRoutes = require("./routes/workspaceRoute");
const channelRoutes = require("./routes/channelRoutes");
const http = require("http");
const socketIO = require("socket.io");
const { logger } = require("./services/winston");

// Create HTTP server
const server = http.createServer(app);

// Initialize Socket.io
const io = socketIO(server);

io.on("connection", (socket) => {
  console.log("A user connected");
  logger.info(socket);
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });

  // Define your custom event handlers here
  // socket.on("chat message", (message) => {
  //   console.log("Received message:", message);
  //   // You can broadcast the message to all connected clients
  //   io.emit("chat message", message);
  // });
});

// Routes
app.get("/", (req, res) => {
  res.status(200).send("Server is listening...");
});

app.use("/api/user", userRoutes);
app.use("/api/workspace", workSpaceRoutes);
app.use("/api/channel", channelRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 6090;
server.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port:${process.env.PORT}`
      .green.bold
  );
});
