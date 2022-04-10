const { ObjectId, Timestamp } = require("mongodb");
 
const user = {
 email: String,
 password: String,
 name: String,
 phone: Number
}
module.exports = mongoose.model("User", user);