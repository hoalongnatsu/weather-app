const request = require('request');

var getWeather = (lat, long) => {
   let reqObject = {
      url: `https://api.darksky.net/forecast/cc8fdad80fda8753a244703b90b4f27e/${lat},${long}`,
      json: true
   };

   return new Promise((resolve, reject) => {
      request(reqObject, (error, response, body) => {
         if (error) {
            reject('Unable to connect to Darksky servers.');
         } else if (response.statusCode === 400) {
            reject('Unable to fecth weather.');
         } else {
            resolve(body.currently.temperature);
         }
      });
   });
}

module.exports = {
   getWeather
}