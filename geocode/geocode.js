const request = require('request');

var geocodeAddress = (address, callback) => {
   var encodeAddress = encodeURIComponent(address);

   let reqObject = {
      url: `https://www.google.com/maps/api/geocode/json?address=${encodeAddress}`,
      json: true
   };

   return new Promise((resolve, reject) => {
      request(reqObject, (error, response, body) => {
         if (error) {
            reject('Unable to connect to Goolge servers.');
         } else if (body.status !== 'OK') {
            reject('Unable to find that address.');
         } else {
            resolve({
               address: body.results[0].formatted_address,
               lat: body.results[0].geometry.location.lat,
               long: body.results[0].geometry.location.lng
            });
         }
      });
   });
}

module.exports = {
   geocodeAddress
}