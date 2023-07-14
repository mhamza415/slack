const app = require("./app");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const userRoutes = require("./routes/userRoutes");
const workSpaceRoutes = require("./routes/workspaceRoute");
const channelRoutes = require("./routes/channelRoutes");
const http = require("http");
const socketIO = require("socket.io");
const { logger } = require("./services/winston");
const messageRoutes = require("./routes/messageRoutes")

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
});

// Routes
app.get("/", (req, res) => {
  res.status(200).send("Server is listening...");
});

app.use("/api/user", userRoutes);
app.use("/api/workspace", workSpaceRoutes);
app.use("/api/channel", channelRoutes);
app.use("/api/message", messageRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 6090;
server.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port:${process.env.PORT}`
      .green.bold
  );
});

global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.msg);
    }
  });
});
