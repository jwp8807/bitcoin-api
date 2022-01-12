var request = require("request");
const USER = "";
const PASS = "";
const IP = "44.200.239.119"

function RequestWrapper(req, res) {
    var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"${req.method}","params":[]}`;
    var options = {
        url: `http://${USER}:${PASS}@${IP}:8332/`,
        method: "POST",
        headers: {
            "content-type": "text/plain;"
        },
        body: dataString
    };
    console.log(options.url);

    callback = (error, response, body) => {
        console.log(response);
        if (!error && response.statusCode == 200) {
        const data = JSON.parse(body);
        res.send(data);
        }
        else{
            console.log(error);
            res.send(error);
        }
    };
    request(options, callback);
}


module.exports = {
    RequestWrapper
}