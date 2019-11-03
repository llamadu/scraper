### MongoDB/Mongoose NPR web-scraper

## Overview: 
I created a web app that lets users leave comments on the latest news. However, I did not actually write any articles; instead, I used Mongoose and Cheerio packages along with MongoDB to scrape news from another site and store it in the apps database.
Check out the running app on Heroku here: https://mighty-tundra-38351.herokuapp.com

## Installation Instructions: 
1. Fork this repo and clone the forked repo to your computer. You will need node.js installed on your system.
2. At the command line navigate to the apps folder and run   ``` npm install ```, this will install the npm dependencies from the package.json file.
3. Install mongodb on your machine then run an instance of the db, if necessary -> https://www.mongodb.com/
4. Then run   ```node server.js``` the console should log the port number the app will be on (currently 3000).
5. Go to your browser and type http://localhost:3000/ into the address bar to bring up the app.


## Technologies Used:

* Node.js
* Handlebars - http://handlebarsjs.com/
* MongoDB - https://www.mongodb.com/download-center#community
* Mongoose - http://mongoosejs.com/docs/
* express NPM Package - https://www.npmjs.com/package/express
* express-handlebars NPM Package - https://www.npmjs.com/package/express-handlebars
* cheerio NPM Package - https://www.npmjs.com/package/cheerio
* body-parser NPM Package - https://www.npmjs.com/package/body-parser
* morgan NPM Package - https://www.npmjs.com/package/morgan
* request NPM Package - https://www.npmjs.com/package/request
