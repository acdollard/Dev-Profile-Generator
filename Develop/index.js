const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateHTML = require("./generateHTML");
const util = require("util");
const electron = require("electron");
const electron_html_to = require("electron-html-to");



function promptUser() { 
return inquirer
  .prompt
([  {
    message: "Enter your GitHub username:",
    name: "username"
    },
    {
    message: "What is your favorite color?",
    name: "color"
    }   ])
};




function axiosCall(data){
    const queryURL = `https://api.github.com/users/${data.username}`
    const starredQueryUrl = `https://api.github.com/users/${data.username}/starred`
    return axios.get(queryURL)
}




// const writeFileAsync = util.promisify(fs.writeFile);
const generateHTML_ASYNC = util.promisify(generateHTML.generateHTML)





    function showError() {
        console.log("An error occured!")
    }





// const questions = [
    //inquirer function goes here? as well as axios call? 
    // ];
    
    function writeToFile(fileName, data) {
//writefile function goes here? 
    }




    
    function init() {

const questions = promptUser();
questions.then((data) => 
    {
    console.log("Hola!")
    const axios = axiosCall(data);
    axios.then((response) => 
    {
        console.log(response.data)
        console.log("Hallo!")
        const username = response.data.login;
        const regularName = response.data.name;
        const photo = response.data.avatar_url;
        const githubURL = response.data.url;
        const blog = response.data.blog;
        const bio = response.data.bio;
        const pubRepos = response.data.public_repos;
        const followers = response.data.followers;
        const following = response.data.following
        const htmlPage = generateHTML_ASYNC({data, response});
        htmlPage.then((htmlCode) => 
            {
            console.log("Hi!")
            return writeFileAsync(`${data.username}.html`, htmlCode)
            })
        htmlPage.catch(showError);
        })
    axios.catch(showError);
    })
questions.catch(showError);
};



init()
