const request = require('request');
const db = require('./database');

request('https://api.hubapi.com/contacts/v1/lists/all/contacts/all?hapikey=aef96d3c-5b39-4f94-9238-24f263f5d687&count=100', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body.substr(0,100)); // Print the HTML for the Google homepage.
   const datas = JSON.parse(body);
   console.log(typeof datas);
   console.log(datas.contacts.length);
// datas.forEach(function(data, i){
//   console.log(i);
//   var insertParam = [data, 1, 1, new Date().getDate ];
//   db.insertData(insertParam, function(err,res){
//     if(err)
//     console.log(err);
//     else
//     console.log('Success')
//   });
// })

var contacts = datas.contacts;
contacts.forEach(function(value,i){
  console.log(value.vid);
  // console.log(value.firstname.value);
  // console.log(value.lastname.value);
  console.log(value.identity-profiles[0].identities[0].type);
})
});


