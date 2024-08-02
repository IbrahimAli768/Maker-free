const mongoose = require("mongoose")


const CoinsSchema = new mongoose.Schema({
    UserId: String,
    Coins: Number,
})




module.exports = mongoose.model("CoinsData", CoinsSchema)