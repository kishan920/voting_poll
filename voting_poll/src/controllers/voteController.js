const blogModel = require("../models/voteModel")

//Q2
const createvote = async function (req, res) {
    try {
        if(req.body.Id==req.validToken._id){
            let savedData=await voteModel.create(req.body)
            res.status(201).send({status:true,data:savedData})
        }else(
            res.status(404).send({status:false,msg:"provide your userId"})
        )
    } catch (error) {
        console.log(error)
        res.status(400).send({ status: false, msg: "server error" })
    }
};

const getvote = async function (req, res) {
    try {
        let id=re.body.id
        let answer=re.body.ans
        let ans1=await voteModel.aggregate([
            {
              $match: {
                pollId: ObjectId("id")
              }
            },
            {
              $group: {
                _id: "$answer",
                count: {
                  $sum: 1
                }
              }
            }])
            return res.status(200).send({status:true , msg:ans1})
           
    } catch (error) {
        console.log(error)
        res.status(400).send({ status: false, msg: "server error" })
    }
};



module.exports.createvote = createvote;
module.exports.getvote = getvote;






