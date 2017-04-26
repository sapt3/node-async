const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .options({
    a:{
      demand: true,
      alias: 'address',
      describe: 'Address to fetch user for',
      string:true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;


  var address = encodeURIComponent(argv.a);
  // console.log(address);
request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
  json: true
}, (error, response, body)=> {
  // console.log(JSON.stringify(body, undefined, 2));
  console.log(body.results[0].formatted_address);
})
