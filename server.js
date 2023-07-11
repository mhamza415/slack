const app = require("./app");
const { notFound, errorHandler } = require('./middlewares/errorMiddleware')
const userRoutes = require("./routes/userRoutes");
app.get("/", (req, res) => {
    res.status(200).send("server is listening...");
})

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 6090;
app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port:${process.env.PORT}`.green.bold);
})