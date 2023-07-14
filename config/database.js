const mongoose = require("mongoose");


const connectMongo = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(
            `MongoDB Connected : ${conn.connection.host}`.cyan.underline.bold
        );
        return conn; // Return the Mongoose connection object
    } catch (error) {
        console.log("Database Connection failed. exitting now ...".red.bold);
        console.error(error);
        process.exit(1);
    }
};
module.exports = connectMongo;