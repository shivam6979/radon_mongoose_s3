const res = require("express/lib/response");
const { modelNames } = require("mongoose");
const authorModel = require("../models/authorModel");
const bookModel = require("../models/bookModel");

/////////////////////////////////////////  MONGO SESSION 1 ON 6TH JUNE //////////////////////////////////////////////////////////
//create book
const booksCreated = async function(req, res) {
    let bookdetails = req.body;
    let bookcreated1 = await bookModel.create(bookdetails);
    res.send({
        status: true,
        date: bookcreated1
    })
};



//find book by bookName and authorName

const bookList = async function(req, res) {
    let allBooks = await bookModel.find().select({ bookName: 1, authorName: 1, _id: 0 })
    return res.send({ msg: allBooks })
}


//find book by isPublished

const getBookInYear = async function(req, res) {
    let isPublished1 = req.body.isPublished
    let allBooks = await bookModel.find().select({ isPublished: isPublished1 })
    return res.send({ msg: allBooks })
}



//find book by bookName, tags, totalPage, isPublished

const getparticularBook = async function(req, res) {
    let fetch = req.body
    let allBooks = await bookModel.find({
        $or: [{
                bookName: fetch.bookName
            },
            { tags: fetch.tags },
            {
                totalPage: fetch.totalPage
            },
            {
                isPublished: fetch.isPublished
            }
        ]

    })
    res.send({ msg: allBooks })
    console.log(allBooks)
}


// find book by indianRupees


const getXINRBooks = async function(req, res) {
    let innerBooks = await bookModel.find({ $or: [{ "price:indianRupees": { $eq: 'Rs 200' } }, { "price:indianRupees": { $eq: 'Rs 250' } }, { "price:indianRupees": { $eq: 'Rs 140' } }] })
    return res.send({ msg: innerBooks })
}

// find book by totalPage, stockAvailable

const getRandomBooks = async function(req, res) {
    let allbooks = await bookModel.find({
        $or: [{
                totalPage: { $gt: "200" }
            }, { stockAvailable: true }

        ]
    })
    res.send({ msg: allbooks })
}


// find book by count


const getBookssData = async function(req, res) {

    let alluser = await bookModel.find().count();
    res.send({ msg: alluser })
}




/////////////////////////////////////////  MONGO SESSION 2 ON 7TH JUNE //////////////////////////////////////////////////////////


//&& && && && && && && && && && && && && && && && && && && && && && && && && && && && && && && && &

//Assignment on 7 th june 2022


const getBookDataByAuthorName = async function(req, res) {
    let allBookData = await bookModel.find({
        $or: [{ authorName: "Chetan Bhagat" }, { stockAvailable: true }, { isPublished: 2016 }]
    }).select({ bookName: 1, authorName: 1, _id: 0 })
    res.send({ status: true, msg: allBookData })
}

const findAnUpdate1 = async function(req, res) {
    let data = req.body
    let allBook = await bookModel.findOneAndUpdate({ authorName: "Chetan Bhagat" }, { $set: data }, { new: true, upsert: true })
    res.send({ status: true, msg: allBook })
}


const findBetween = async function(req, res) {
    // let data = req.body;
    let findbw = await bookModel.find({ totalPage: { $gte: 100, $lte: 250 } }).select({ authorName: 1, author_id: 1 })
    res.send({ status: true, msg: findbw })
}






/////////////////////////////////////////  MONGO SESSION 3 ON 8TH JUNE //////////////////////////////////////////////////////////

//** ** ** ** ** ** ** ** ** ** ** ** 8888888888888888888888888888888888888888888888888888888888888888 * /
//Assignment on 8 th june 2022

const booksbyauthorid = async function(req, res) {

    let allBook2 = await bookModel.find({ authorId: "629faa08536844fae7274a68" }).select({ bookName: 1, _id: 0 })
    res.send({ status: true, msg: allBook2 })
}

const ageAndRating = async function(req, res) {
    let allAuthors = await authorModel.find({ age: { $gte: 65 } }).select({ authorName: 2, age: 2, _id: 0 })
    res.send({ status: true, msg: allAuthors })
}

module.exports.booksCreated = booksCreated;
module.exports.bookList = bookList;
module.exports.getBookInYear = getBookInYear;
module.exports.getparticularBook = getparticularBook;
module.exports.getXINRBooks = getXINRBooks;
module.exports.getRandomBooks = getRandomBooks;
module.exports.getBookssData = getBookssData;



//^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^
//Assignment on 7 th june 2022


module.exports.getBookDataByAuthorName = getBookDataByAuthorName;
module.exports.findAnUpdate1 = findAnUpdate1;
module.exports.findBetween = findBetween;



//** ** ** ** ** ** ** ** ** * 88888888888888888888888888888888888888888888888888 * //

//modules for Assignment on 8 th june
module.exports.booksbyauthorid = booksbyauthorid;
module.exports.ageAndRating = ageAndRating;