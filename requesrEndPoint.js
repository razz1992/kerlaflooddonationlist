var request = require('request');

var host = "https://sso.kerala.gov.in/CMDRF/";
var opts = {
    method: 'POST',
    url : "https://sso.kerala.gov.in/CMDRF/"+"getPaymentDetails",
    data : {name: "7501798294"}
};


request(opts, function(err, data) {
    if (err) {
        console.log("sendRequest method returned an error", err);
        return;
    }
    console.log("Got response from end point for sendRequest method.");
    console.log("----------------------------");
    console.log(JSON.stringify(data));
  });
