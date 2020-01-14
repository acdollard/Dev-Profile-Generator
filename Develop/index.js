const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateHTML = require("./generateHTML");
convertFactory = require("electron-html-to");
const conversion = convertFactory({
    converterPath: convertFactory.converters.PDF
})

let queryURL = null; 
let username = null;
let regularName = null;
let photo = null;
let githubURL = null;
let blog = null;
let bio = null;
let pubRepos = null;
let followers = null;
let following = null;
let data = null;




inquirer.prompt([  
    {
    message: "Enter your GitHub username:",
    name: "username"
    },
    {
    message: "What is your favorite color?",
    name: "color"
    }   
]) 
    .then(response => {
        data = response;
        queryURL = `https://api.github.com/users/${data.username}`;
        return axios.get(queryURL);

})
    .then(response => {
        console.log(response)
         starredQueryURL = queryURL + "/starred"; 
         username = response.data.login;
         regularName = response.data.name;
         photo = response.data.avatar_url;
         githubURL = response.data.url;
         blog = response.data.blog;
         bio = response.data.bio;
         pubRepos = response.data.public_repos;
         followers = response.data.followers;
         following = response.data.following;
        return axios.get(starredQueryURL);
})
    .then(result => {
        let starred = result.data.length;
        const Newhtml = generateHTML.generateHTML(username, regularName, photo, githubURL, blog, bio, pubRepos, followers, following, starred, data);
                //converts the newly generated HTML to a pdf
                conversion({html: Newhtml}, function(err, result){
                    if(err){
                        return console.log(err)
                    }
                    result.stream.pipe(fs.createWriteStream(`${username}_7.pdf`)); //need to figure out file naming convention
                    debugger; 
                    console.log("PDF successfully generated!");
                    conversion.kill()
                });
})
    .catch(err => {
        console.log(err);
})








