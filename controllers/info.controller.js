

var request = require("request");
const PASS = "";
const USER = "";

function GetBlockCount(req, res) {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblockcount","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@192.168.254.47:8332/`,
    method: "POST",
    headers: {
        "content-type": "text/plain;"
    },
    body: dataString
  };
  
  callback = (error, response, body) => {
    console.log(response);
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
    else{
        console.log('error@!!!!!!!!!!!!!!!!!!');
        console.log(error);
        res.send(error);
    }
  };
  request(options, callback);
}

module.exports = {
    GetBlockCount
}
