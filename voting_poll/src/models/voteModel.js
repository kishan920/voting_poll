const { ObjectId, Timestamp } = require("mongodb");
 
const vote = { pollId: ObjectId,
    userId: ObjectId,
    answer: String,
    createdAt: Timestamp
   }
   module.exports = mongoose.model("vote", vote);