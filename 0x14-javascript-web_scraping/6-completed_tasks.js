#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, function (error, response, body) {
  if (error) {
    console.log(error);
  } else if (response.statusCode === 200) {
    const tasks = JSON.parse(body);
    const completedTasksByUser = {};

    tasks.forEach(function (task) {
      if (task.completed) {
        const userId = task.userId;
        if (completedTasksByUser[userId]) {
          completedTasksByUser[userId]++;
        } else {
          completedTasksByUser[userId] = 1;
        }
      }
    });

    for (const userId in completedTasksByUser) {
      console.log(`User ${userId} has completed ${completedTasksByUser[userId]} tasks.`);
    }
  } else {
    console.log(`Error: Received status code ${response.statusCode} from server.`);
  }
});
