const yargs= require('yargs');
const geocode= require('./geocode/geocode');
const weather = require('./weather/weather');

const argv= yargs
   .options({
      a: {
         demand: true,
         alias: 'address',
         describe: 'Address to fecth weather',
         string: true
      }
   })
   .help()
   .alias('help', 'h')
   .argv;

geocode.geocodeAddress(argv.address)
   .then((result) => {
      return weather.getWeather(result.lat, result.long);
   })
   .then((result) => {
      console.log(`Temperature: ${result}`);
   })
   .catch((err) => {
      console.log(err);
   });