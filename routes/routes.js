const express = require("express")
const router = express.Router();
const bookController = require("../controllers/bookController")
const authorController = require("../controllers/authorController")



router.post("/booksCreated", bookController.booksCreated)
router.post("/authorCreated", authorController.authorCreated)
router.get("/bookList", bookController.bookList)
router.get("/getBookInYear", bookController.getBookInYear)
router.get("/getparticularBook", bookController.getparticularBook)
router.get("/getXINRBooks", bookController.getXINRBooks)
router.get("/getRandomBooks", bookController.getRandomBooks)
router.get("/getBookssData", bookController.getBookssData)


router.get("/getBookDataByAuthorName", bookController.getBookDataByAuthorName)
router.post("/findAnUpdate1", bookController.findAnUpdate1)
router.get("/findBetween", bookController.findBetween)
router.get("/booksbyauthorid", bookController.booksbyauthorid)
router.get("/ageAndRating", bookController.ageAndRating)



router.get("/test", function(req, res) {
    res.send("API is running on the same port")
})

module.exports = router;