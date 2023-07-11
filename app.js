const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/dbConnection");
const cors = require("cors");

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
connectDB();

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}
module.exports = app;