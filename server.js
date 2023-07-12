const app = require("./app");
const { notFound, errorHandler } = require('./middlewares/errorMiddleware')
const userRoutes = require("./routes/userRoutes");
const workSpaceRoutes = require("./routes/workspaceRoute");
app.get("/", (req, res) => {
    res.status(200).send("server is listening...");
})

app.use("/api/user", userRoutes);
app.use("/api/workspace", workSpaceRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 6090;
app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port:${process.env.PORT}`.green.bold);
})