#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

request(url, function (error, response, body) {
  if (error) {
    console.log(error);
  } else if (response.statusCode === 200) {
    fs.writeFile(filePath, body, 'utf8', function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log(`Successfully wrote response to file: ${filePath}`);
      }
    });
  } else {
    console.log(`Error: Received status code ${response.statusCode} from server.`);
  }
});
