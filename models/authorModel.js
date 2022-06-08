const mongoose = require("mongoose");



const authorSchema = new mongoose.Schema({
    authorName: "String",
    age: "String",
    address: "String"
}, { timeStamps: true });
module.exports = mongoose.model("radonauthors", authorSchema);