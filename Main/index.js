//require fs, inquirer

const fs = require("fs");
const inquirer = require("inquirer");

//user inquirer to build out fileContents

inquirer.prompt([
  {
    type: "input",
    name: "nameRes",
    message: "Please enter your name",
  },
  {
    type: "input",
    name: "ageRes",
    message: "Please input your age in years", 
  },
  {
    type: "input",
    name: "locationRes",
    message: "Please input your location",
  },
  {
    type: "input",
    name: "familyMembersRes",
    message: "Pleae input who your family members are, separated by a comma.",
  },
  {
    type: "input",
    name: "bioRes",
    message: "Please enter a short 1-2 sentence bio.",
  },
  {
    type: "input",
    name: "techLangRes",
    message: "Please tell us what technical languages you know, separated by a comma.",
  },
  {
    type: "input",
    name: "humanLangRes",
    message: "Please tell us what HUMAN languages you know, separated by a comma.",
  },
  {
    type: "input",
    name: "githubRes",
    message: "Please tell us your github profile username.",
  },
  {
    type: "input",
    name: "linkedInRes",
    message: "Please give us your linkedin profile url."
  }
])
.then((response)=> console.log(response))

// const fileContents = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h1>Build Out an HTML File</h1>

//     <h3>Name</h3>
//     <p></p>

//     <h3>Age</h3>
//     <p></p>

//     <h3>Location</h3>
//     <p></p>

//     <h3>Family Members</h3>
//     <p></p>

//     <h3>Bio</h3>
//     <p></p>

//     <h3>Technical Languages Known</h3>
//     <p></p>

//     <h3>Human Languages Known</h3>
//     <p></p>

//     <h3>Github profile url</h3>
//     <p></p>

//     <h3>Linked In Profile URL</h3>
//     <p></p>
// </body>
// </html>`
// //use fs to write file and place fileContents within
// fs.writeFile('test.html', fileContents, (error)=>{
//   error ?  console.error(error) : console.log("Success!")
// })