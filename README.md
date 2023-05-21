Cypress first steps

## Hello team! Here is your test task.
1. Create Repo in Github's organization
2. Create folder
3. Create Readme.md file and briefly describe your project
4. git remote add origin <link of repo .git>
5. npm init or npm init -y // command initialize a project
6. Create .gitignore file
7. git add . // add files 
8. git commit -m <comment> -> Commit files
9. git push origin <name of branch> // push committed changes to the remote repo (push master branch with 1 commit)
10. git checkout -b <name of branch> // create and switch to a new branch where you’ll work in the scope of this homework
11. Create a test using cypress where you have to fill in the form for the text-box (p.s. https://demoqa.com/ - base url here)
12. Commit and push created code to the remote repo and create a pull request into master branch. 


## How to use Cypress:
1. npm i cypress // install Cypress framework
2. Ctrl + C // close Cypress
3. npx cypress open // open Cypress
4. npx cypress run // run all tests
5. npm run <name of script> // in case that script was added in package.json


## Technologies:
1. Cypress version: ^12.12.0
2. Mocha: ^10.2.0 // npx install mocha
3. Faker:^8.0.0 // npx install@faker-js/faker --save -dev


## Directory structure:
* e2e - contains integration test files
* fixtures - contains test data
* support
    - commands.js - allows to create custom commands and overwriting existing commands
    - e2e.js - contains global configuration and behavior that modifies Cypress
* If screenshots were taken via the cy.screenshot() command or automatically when a test fails, the screenshots are stored in the screenshots are stored in the screenshotsFolder which is set to `cypress/screenshots` by default
* Videos are stored in the videoFolder whic is set to `cypress/videos` by default
* cypress.config.js - the first time you open Cypress Test Runner, it creates the `cypress.config.js` configuration file. 
This file is used to store any configuration values you supply
* .gitignore - contains all folders and files that should not be added/ commited/ pushed
* download - contains all files that will be downloaded during runnig of tests


Base url for creating e2e tests: https://demoqa.com/ 
Useful links: https://docs.cypress.io/guides/overview/why-cypress

Feel free to review each other.
Good luck and have a nice day!