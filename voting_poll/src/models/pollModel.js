const { ObjectId, Timestamp } = require("mongodb");
 
const poll = {
 _id: ObjectId,
 title: String,
 options: [
   {
     text: String
   }
 ],
 channel: ObjectId,
 createdAt: Timestamp,
 expireAt: Timestamp,
}
module.exports = mongoose.model("poll", poll);