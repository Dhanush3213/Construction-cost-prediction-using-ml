const mongoose = require("mongoose")


function connectDB(uri) {
    console.log("Database conected");
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB;

