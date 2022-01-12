const {RequestWrapper} = require('../wrappers/request.wrapper');

function GetNetworkInfo(req, res) {
  req.method = 'getnetworkinfo';

  try {
    RequestWrapper(req, res);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
    GetNetworkInfo
}
