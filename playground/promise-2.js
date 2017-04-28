const request = require('request');

var geocodeAddress = (address) => {
  return new Promise(function(resolve, reject) {
    var encodedaddress = encodeURIComponent(address);
      // console.log(address);
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedaddress}`,
      json: true
    }, (error, response, body)=> {
      if(error){
        //if the error object exists
        reject("Unable to connect to google servers");
      }
      else if (body.status === 'ZERO_RESULTS') {
        reject("Unable to find the desired address");
      }

      else if(body.status === 'OK'){
      // console.log(JSON.stringify(body, undefined, 2));
      resolve(body.results[0].formatted_address);
      }
    });
  });

};

geocodeAddress('Karunamoyee').then((address) => {
  console.log(address);
}, (error) => {
  console.log(error);
});
