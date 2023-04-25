# Friendr
Friendr is a web application that allows users to find new friends from around the world by “matching” with others, similar to existing dating apps. Users can match with others, view their matches, message their matches, and edit their profile. While the platform will be targeted towards adults between age 18-29, Friendr is for anyone looking to meet new people. The platform will also primarily be for English speaking users.

## A/B Variants
- Application A: In this design, users are shown one profile at a time, with the options to reject or accept the match. Users must select an option before viewing the next match.
- Application B: In this design, users are multiple profiles at a time in a scrollable, grid format. Users only have the option to accept matches. Once a match is accepted, it is then removed from the grid. 


## Installation/Running
The project can be cloned using `git clone`. Once installed locally, run `npm install all` to install all required node-modules, and then run `ng serve` and visit `http://localhost:4200/` in your browser. The website is also deployed and can be visited through the [Live Website](https://friendr-e03c7.web.app/).

## Tools
The project was made using [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1. and TypeScript. The app was deployed using Firebase.

## Deploying
To deploy the website, run `ng build` to build the project and then run `firebase deploy` to deploy the website to production.

## Credits
This application was made from the ground up by Manu Kolehmainen, Itzel Maldonado, and Joseph Fleming for the Spring 2023 section of CEN4721 at the University of Florida. No outside help was received in the development of the project. User testing was performed with other UF students.