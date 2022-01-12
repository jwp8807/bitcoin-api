const {RequestWrapper} = require('../wrappers/request.wrapper');

function GetBlockCount(req, res) {
  req.method = 'getblockcount';

  try {
    RequestWrapper(req, res);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
    GetBlockCount
}
