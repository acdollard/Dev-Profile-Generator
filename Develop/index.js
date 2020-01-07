const fs = require("fs");
    convertFactory = require("electron-html-to");
const axios = require("axios");
const inquirer = require("inquirer");
const generateHTML = require("./generateHTML");
const util = require("util");



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
   return axios.get(queryURL);
   }

function axiosCall_starred_repos(data){
    const starredQueryURL = `https://api.github.com/users/${data.username}/starred`
    return axios.get(starredQueryURL);
}



function showError() {
    console.log("A goof dun occured!")
}

const conversion = convertFactory({
    converterPath: convertFactory.converters.PDF
})
    

//main functions call
function init() {
//calls inquirer function
const questions = promptUser();
//resolves inquirer promise
questions.then((data) => {

    //first axios call for returning starred github repos
    const axios_call_one = axiosCall_starred_repos(data);

        //resolves first axios promise by saving relevant info as a const and then calling 2nd axios function
        axios_call_one.then((response) => {
        const starred = response.data.length
        const axios_call_two = axiosCall(data);

            //resolves 2nd axios function by saves user data as consts and then calling generateHTML function
            axios_call_two.then((response) => {
                console.log("Hallo!");
                console.log(data.color);
                const username = response.data.login;
                const regularName = response.data.name;
                const photo = response.data.avatar_url;
                const githubURL = response.data.url;
                const blog = response.data.blog;
                const bio = response.data.bio;
                const pubRepos = response.data.public_repos;
                const followers = response.data.followers;
                const following = response.data.following;
                //calls generateHTML function and passes it consts from the both axios calls 
                const Newhtml = generateHTML.generateHTML(username, regularName, photo, githubURL, blog, bio, pubRepos, followers, following, starred, data);
                    //converts the newly generated HTML to a pdf
                    conversion({html: Newhtml}, function(err, result){
                        if(err){
                            return console.log(err)
                        }
                        result.stream.pipe(fs.createWriteStream(`${username}23.pdf`)); //need to figure out file naming convention
                    });

            });
            axios_call_two.catch(showError);
    });
    axios_call_one.catch(showError)
});
questions.catch(showError);
    };



init()
