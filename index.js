const inquirer = require("inquirer");
const express = require("express");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your location?",
      name: "location",
    },
    {
      type: "input",
      message: "What is your bio?",
      name: "bio",
    },
    {
      type: "input",
      message: "What is your LinkedIn URL?",
      name: "linkedin",
    },
    {
      type: "input",
      message: "What is your GitHub URL?",
      name: "github",
    },
  ])
  .then((data) => {
    // const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link href="style.css" rel="stylesheet" type="text/css">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
      <title>For...of</title>
    </head>
    
    <body>
    <h2>welcome to my page</h2>
    <h4>my name is ${data.name}</h4>
    <h2>About me</h2>
    <h6<span class="badge bg-secondary">${data.bio}</span></h6>
    <h2>Contact info </h2>
    <h6>my location is ${data.location}</h6>
    <h6>my linkedIn is <a href=${data.linkedin}>${data.linkedin}</a></h6>
    <h6>my github is <a href=${data.github}>${data.github}</a></h6>
  </body>
    
    </html>
    
    `;

    fs.writeFile("index.html", html, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });
