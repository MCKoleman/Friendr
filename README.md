# Friendr
Friendr is a web application that allows users to find new friends from around the world by “matching” with others, similar to existing dating apps. Users can match with others, view their matches, message their matches, and edit their profile. While the platform will be targeted towards adults between age 18-29, Friendr is for anyone looking to meet new people. The platform will also primarily be for English speaking users.

## Installation/Running
The project can be cloned using `git clone`. Once installed locally, run `npm install all` to install all required node-modules, and then run `ng serve` and visit `http://localhost:4200/` in your browser. The website is also deployed and can be visited through the [Live Website](https://friendr-e03c7.web.app/).

## Deploying
To deploy the website, run `ng build` to build the project and then run `firebase deploy` to deploy the website to production.

## Implementation
The project was made using [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1. We used Angular for the frontend and implemented a serverless single-page application (SPA) design, deploying the application with Firebase. For the website, we used TypeScript for all code files, and HTML and CSS to design the layout of the program. We also used [HeroIcons](https://heroicons.com/) for icons on the website, [ThisPersonDoesNotExist](https://thispersondoesnotexist.com/) for profile pictures of fake users, and [TailwindCSS](https://tailwindcss.com/) for more advanced styling of the HTML pages. All data is stored locally as a cookie, instead of using a backend. This makes the data persistent to a browser without needing a session, but can also be cleared when needed.

## Components
The project was made with 15 components, each using both a universal `styles.css` document and an individual CSS, HTML, and TypeScript file. The components are:
- **Button**: Standardized CSS button linking to another internal page
- **Footer**: Footer displaying links to main pages. Allows clearing of data and swapping between A and B applications.
- **Home Page**: Displays welcome message and buttons to start matching and login.
- **Login Screen**: Allows user to login. Currently does nothing as the application is not connected to a backend. Placeholder for future implementation.
- **Matching**: Holder component for both application A and application B. Switches between the two components depending on the current state of the application (can be changed from the footer).
- **Matching Grid**: Main component of application B. Allows user to see a list of all possible matches, and to choose "match" with any they find interesting.
- **Matching Grid Profile**: Profile component of application B. Shows the name, age, and bio of the profile.
- **Matching Matches**: List of matches that the current user has made.
- **Matching Match Profile**: Profile component of the matches listed in "Matching Matches". Allows the user to instantly navigate to matching with that user.
- **Matching Swipe**: Main component of application A. Allows user to choose either "match" or "reject" for one user at a time, giving them more time to think about each individual user.
- **Matching Swipe Profile**: Profile component of application A. Shows the name, age, and bio of the currently loaded profile loaded for the user to match with.
- **Messaging**: Allows user to swap between and message any of their current matches. Runs as an SPA to allow user to message any match from the same component but different URLs.
- **Navbar**: Top navigation bar of the application. Has links to the home page, matching page (A or B, whichever mode the user is on), messaging page, and profile.
- **Profile**: Shows user's own profile, allowing them to edit it. Core feature of the application, but the user's profile is only stored locally since no backend is used. Will save to a specific user ID, which can be used in the future to show the profile when listing matches for other users. Not all profile fields are displayed in the app currently, such as "interests" and "looking for".
- **Register Screen**: Allows user to register for an account. Currently does nothing, as the application is not connected to a backend. Placeholder for future implemention.

## A/B Variants
- Application A: In this design, users are shown one profile at a time, with the options to reject or accept the match. Users must select an option before viewing the next match.
- Application B: In this design, users are multiple profiles at a time in a scrollable, grid format. Users only have the option to accept matches. Once a match is accepted, it is then removed from the grid. 

## Credits
This application was made from the ground up by Manu Kolehmainen, Itzel Maldonado, and Joseph Fleming for the Spring 2023 section of CEN4721 at the University of Florida. No outside help was received in the development of the project. User testing was performed with other UF students.   