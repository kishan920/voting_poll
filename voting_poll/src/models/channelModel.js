const { ObjectId } = require("mongodb");
 
const channel = {
 _id: ObjectId,
 name: String,
 usersCount: Number,
 creator: ObjectId,
 user: [], 
}
module.exports = mongoose.model("channel", channel);