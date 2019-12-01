This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About
This app lists the continents list, the user can click on multiple continents, if the request is not fullfilled or the data is not available in the in memory cache, the resquest will be cancelled and will be placed again for the most recent continent. You may have to slow down your network using throtle.

## Pre-requisities
Install `serve` using `npm install -g serve`
Install `workbox-cli` using `npm install -g workbox-cli`

## Setup
1. Run `npm install`
2. Run `npm run start` or `npm run serve`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run serve`

Does all the operations of `npm run build` commad and also serves the build using `serve`. It uses workbox to generate a service-worker. You can view the application on [http://localhost:5000](http://localhost:5000).

## Scope

The app uses GraphQL to load the data from URL `https://countries.trevorblades.com`.
Here, I have followed the following approach:
1. fetching the continents list
2. when the user clicks on the multiple continents, the most recent continent is shown.
3. Once, on the detail page the user can go back to the list page by clicking home.
4. The response is stored in inMemory cache (for better user experience)

What more can be done:
1. When the user is offline, i could cache the response from the graphql query (i tried doing that, but one cannot store the response for a POST request in cache, so it should be stored in the index DB, along with some cache expiration)
2. Same goes for the continent detail request, that can be cached in index DB.
3. React Router could be used for navigation becuase i feel like conditional rendering is kind of hacky.
4. Updating of the service worker file, the control needs to be in the hands of the user.

