const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
    bookName: {
        type: "String",
        require: true
    },
    authorId: "String",
    price: {
        indianRupees: "String",
        europeanDoller: "String"
    },
    isPublished: {
        type: Number,
        default: 2022
    },
    tags: { type: Array },
    authorName: { type: "String" },
    totalPage: {
        type: Number
    },
    stockAvailable: { type: Boolean },
    ratings: "String"
}, { timeStamps: true });
module.exports = mongoose.model("radonbooks", bookSchema);