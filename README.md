# Travel Planner App  - 'Todo el Mundo'

# Project Explanation
This is a multi-faceted web application that prompts the user to input a travel destination and timeline.

Upon receiving the user-inputted info, the application returns a collection of relevant information:
- Image of destination country
- Countdown till departure date
- Trip length (in days)
- Country flag image
- Basic info about the destination country
- Current weather of destination location
- Weekly forecast for destination location
- An interactive packing list for the trip

The packing list is editable and stored in the user's browser for future reference.

# Table of Contents
- [Project Title](#travel-planner-app-todo-el-mundo)
- [Project Explanation](#project-explanation)
- [Table of contents](#table-of-contents)
- [Web Technologies](#web-technologies)
- [Installation](#installation)
- [Sandbox](#sandbox)
- [Usage](#usage)
- [Testing](#testing)
- [License](#license)

# Web Technologies
This app is the final, capstone project in the Udacity Front End Web Developer nanodegree program. 

I've added quite a few optional and custom features in an effort to challenge my understanding of the web technologies herein.

Web technologies used in this project include:
- Browser dev tools
- HTML, CSS & Javascript
- ES6 Modules
- APIs
- Express.js
- Node.js
- Babel
- Webpack
    - Loaders, Plugins & Configs
- Workbox(Service worker toolkit)
- Sass
- Jest
- Npm
- Git

# Installation
[(Back to Table of Contents)](#table-of-contents)
To run this web app, you'll need to have node/npm installed and a rudimentary understanding of git.

First clone the repo via the CLI with the following command:

`git init`

`git clone https://github.com/RedBear52/capstoneTravel.git`

Then, `cd` into the cloned project directory and run `npm run start`.
This will start the server at http://localhost:5200

Before the form and the subsequent API request can function properly, you'll need to go to procure your own API keys from:

- Weatherbit.io
- Geonames.org
- Pixabay.com

Once you have all of the necessary secret keys of your own, create a `.env` file in the root directory of the project and add the following code to the file:

`GEONAMES_API_KEY = <your geonames api key>`
`WEATHERBIT_API_KEY  = <your weatherbit api key>`
`PIXABABY_API_KEY = <your pixabay api key>`

Save the file and you should be good to go. If you run into trouble with this step, be sure to check out the documentation on the node `dotenv` package which is used in this (and many other) projects to make for easy management of enviornment variables.

# Sandbox
If you'd like to experiment with this app for educational/evaluative purposes, you may want to run the webpack-dev-server via the `npm run dev` command.
This will run a live, reloading dev server tool that makes for a better dev experience when tweaking, testing and experimenting with the code.
NOTE: This will serve up your dev mode site at: http://localhost:3001

# Usage
[(Back to Table of Contents)](#table-of-contents)
Best used as a learning tool to practice and improve your own understanding of the above-mentioned web technologies and how they typically function within a project.

This is a relatively complex project for a beginner programmer (like myself), built from scratch, without any front end frameworks. On top of that, it uses Webpack and requires some basic but custom config as well as use of loaders and plugins and should make for very useful practice for other beginning developers who are willing to dig into the appropriate docs and resources.

# Testing
[(Back to Table of Contents)](#table-of-contents)
If you'd like to become familiar with the basics of jest and other similar testing frameworks, you may want to run the existing tests via the `npm test` command.

This will run all of the tests (living in the __test__ folder) and return a pass/fail evaluation along with additional notes.

For an even more detailed report, alter the `test` script inside of the `package.json` file to read:

`"test": "jest --coverage"`

# License
[(Back to Table of Contents)](#table-of-contents)
## Udacity Honor Code
This project was submitted by Ryan Spearman as part of a Nanodegree program at Udacity.com.

As part of Udacity Honor code, submissions must be one's own work,
submitting this project as yours will cause you to break the Udacity Honor Code
and the suspension of your account.

The author (me) allows you to use this code as a reference and a leanring tool. Any other use may be in violation of Udacity's Honor code and/or the additional (MIT) licensing.

Copyright (c) 2022 Ryan Spearman

## MIT License

Permission is hereby freely granted to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notices and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.