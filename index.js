const request = require('request');
const yargs = require('yargs');

const argv = yarg
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


  console.log(argv);
request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=AJ-65%20Sector-II,%20Salt%20Lake%20City',
  json: true
}, (error, response, body)=> {
  console.log(JSON.stringify(body, undefined, 2));
})
