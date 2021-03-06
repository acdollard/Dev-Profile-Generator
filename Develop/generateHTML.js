const colors = {
  green: {
    wrapperBackground: "#E6E1C3",
    headerBackground: "#C1C72C",
    headerColor: "black",
    photoBorderColor: "#black"
  },
  blue: {
    wrapperBackground: "#5F64D3",
    headerBackground: "#26175A",
    headerColor: "white",
    photoBorderColor: "#73448C"
  },
  pink: {
    wrapperBackground: "#879CDF",
    headerBackground: "#FF8374",
    headerColor: "white",
    photoBorderColor: "#FEE24C"
  },
  red: {
    wrapperBackground: "#DE9967",
    headerBackground: "#870603",
    headerColor: "white",
    photoBorderColor: "white"
  }
};

function generateHTML(username, regularName, photo, githubURL, blog, bio, pubRepos, followers, following, starred, data) {
  return `<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
      <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <title>Document</title>


      <style>
          @page {
            margin: 0;
          }
         *,
         *::after,
         *::before {
         box-sizing: border-box;
         }
         html, body {
         padding: 0;
         margin: 0;
         }
         html, body, .wrapper {
         height: 100%;
         }
         .wrapper {
         background-color: ${colors[data.color].wrapperBackground};
         padding-top: 100px;
         padding-bottom: 100px;
         }
         body {
         background-color: white;
         -webkit-print-color-adjust: exact !important;
         font-family: 'Cabin', sans-serif;
         }
         .main {
         background-color: #E9EDEE;
         height: auto;
         padding-top: 30px;
         padding-bottom: 30px; 
         margin-left: 0px; 
         margin-right: 0px; 

         }
         h1, h2, h3, h4, h5, h6 {
         font-family: 'BioRhyme', serif;
         margin: 0;
         }
         h1 {
         font-size: 3em;
         }
         h2 {
         font-size: 2.5em;
         }
         h3 {
         font-size: 2em;
         text-align: center; 
         }
         h4 {
         font-size: 1.5em;
         text-align: center;
         }
         h5 {
         font-size: 1.3em;
         text-align: center; 
         }
         h6 {
         font-size: 1.2em;
         text-align: center; 
         }
         .photo-header {
         position: relative;
         margin: 0 auto;
         margin-bottom: -50px;
         display: flex;
         justify-content: center;
         flex-wrap: wrap;
         background-color: ${colors[data.color].headerBackground};
         color: ${colors[data.color].headerColor};
         padding: 10px;
         width: 95%;
         border-radius: 6px;
         z-index: 1; 
         }
         .photo-header img {
         width: 250px;
         height: 250px;
         border-radius: 50%;
         object-fit: cover;
         margin-top: -75px;
         border: 6px solid ${colors[data.color].photoBorderColor};
         box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
         }
         .photo-header h1, .photo-header h2 {
         width: 100%;
         text-align: center;
         }
         .photo-header h1 {
         margin-top: 10px;
         }
         .links-nav {
         width: 100%;
         text-align: center;
         padding: 20px 0;
         font-size: 1.1em;
         }
         .nav-link {
         display: inline-block;
         margin: 5px 10px;
         }
         .workExp-date {
         font-style: italic;
         font-size: .7em;
         text-align: right;
         margin-top: 10px;
         }
         .container {
         padding: 50px;
         padding-left: 100px;
         padding-right: 100px;
         }

         .row {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin-top: 20px;
           margin-bottom: 20px;
         }

         .card {
           padding: 20px;
           border-radius: 6px;
           background-color: ${colors[data.color].headerBackground};
           color: ${colors[data.color].headerColor};
           width: 36%;
           margin: 30px; 
         }
         
         .col {
         flex: 1;
         text-align: center;
         }

         a, a:hover {
         text-decoration: none;
         color: inherit;
         font-weight: bold;
         }

         @media print { 
          body { 
            zoom: .75; 
          } 
         }
      </style>
      
<body>
      <div class="container">
         <div class="wrapper">
            <div class= "row" >
              <div class = "col-sm-10 photo-header">
                <img src=${photo}>
                <h1>Hi!</h1>
                <h2>My name is ${regularName}</h2>
                <div class="links-nav col-sm-10">
                  <a href=location class="nav-link"><i class="fas fa-location-arrow"></i>
                  Location</a>
                  <a href=${githubURL} class="nav-link"><i class="fab fa-github"></i>GitHub</a>
                  <a href=${blog} class="nav-link"><i class="fab fa-blogger"></i>Blog</a>
                </div>
              </div>
            </div>
  
              <div class = "main">
                <div class="row justify-content-center">
                  <h4 class="col-10 text-center">${bio}</h4>
                </div>
                <div class="row col-12 justify-content-center" >
                  <div class = "card">
                    <h4>Public Repositories</h4>
                    <h6>${pubRepos}</h6>
                  </div>
                  <div class = "card">
                    <h4>Followers</h4>
                    <h6>${followers}</h6>
                  </div>
                </div>
                <div class="row col-12 justify-content-center">
                  <div class = "card">
                    <h4>GitHub Stars</h4>
                    <h6>${starred}</h6>
                  </div>
                  <div class = "card">
                    <h4>Following</h4>
                    <h6>${following}</h6>
                  </div>
                </div>
              </div>


            </div>
         </div>
      
      
      </div>


</body>`
        }



module.exports = {
  generateHTML: generateHTML,
  colors: colors 
}