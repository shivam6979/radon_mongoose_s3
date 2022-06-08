const express = require("express");
const bodyParser = require("body-parser")
const route = require("./routes/routes")



const { default: mongoose } = require("mongoose");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))


mongoose.connect("mongodb+srv://shiva:ZxJf1KONMThYSpCU@cluster0.yuxls.mongodb.net/RADON", {
        useNewUrlParser: true
    })
    .then(() => console.log("Mongodb is connected"))
    .catch(err => console.log(err))

app.use("/", route);



app.listen(process.env.PORT || 4000, function() {
    console.log("Express is running on port " + (process.env.PORT || 4000))
})