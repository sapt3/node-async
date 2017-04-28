const request = require('request');

var geocodeAddress = (address) => {
  var address = encodeURIComponent(address);
    // console.log(address);
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
    json: true
  }, (error, response, body)=> {
    if(error){
      //if the error object exists
      console.log("Unable to connect to google servers");
    }
    else if (body.status === 'ZERO_RESULTS') {
      console.log("Unable to find the desired address");
    }

    else if(body.status === 'OK'){
    // console.log(JSON.stringify(body, undefined, 2));
    console.log(body.results[0].formatted_address);
    }
  });

}

module.exports.geocodeAddress = geocodeAddress;
