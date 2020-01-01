// const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
// const electron = require("electron");
// const electron_html_to = require("electron-html-to");



inquirer
  .prompt(
    {
    message: "Enter your GitHub username:",
    name: "username"
    },
    {
    message: "What is your favorite color?",
    name: "favoriteColor"
    }
    ).then(function({ username }){
    const queryUrl = `https://api.github.com/users/${username}`
    axios
        .get(queryUrl)
        .then(function(res){
            console.log(res)
        })
    })



// const questions = [
  
// ];

// function writeToFile(fileName, data) {
 
// }

// function init() {

// init();
