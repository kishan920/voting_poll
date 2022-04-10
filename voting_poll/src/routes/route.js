const express = require('express');
const router = express.Router();


const pollController = require("../controllers/pollcontroller")
const voteController = require("../controllers/voteController")


//Create new pole
router.post('/createpoll', pollController.createpoll);
router.post('/createpoll', voteController.createvote);

router.post('/getpoll', voteController.getvote);




module.exports = router;