const express = require("express");
const router = express.Router();

const dotenv = require("dotenv");
const InfoController = require("../controllers/info.controller");
dotenv.config();

router.get("/test", (req, res) => res.json({ msg: "backend works" }));


router.get("/getblockcount", InfoController.GetBlockCount);


module.exports = router;