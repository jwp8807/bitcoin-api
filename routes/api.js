const express = require("express");
const router = express.Router();

const dotenv = require("dotenv");
const BlockchainRpcController = require("../controllers/blockchainrpc.controller");
const NetworkRpcController = require("../controllers/networkrpc.controller");
dotenv.config();

router.get("/ping", (req, res) => res.json({ msg: "success" }));
router.get("/getblockcount", BlockchainRpcController.GetBlockCount);
router.get("/getnetworkinfo", NetworkRpcController.GetNetworkInfo);

module.exports = router;