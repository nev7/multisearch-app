# The Task

## Technical Concepts

Dont Repeat Yourself (DRY) - Reducing the complexity of the app by spliting the big chunks of code into smaller once.
i.e Large components into smaller once where possible.

Keep It Simple Stupid (KISS) - Finding the most possibly simple solution to the problem.

## Technology Used

NodeJS with NPM / ReactJS 

I stopped on React since I am familiar with it and I like what [creat-react-app](https://github.com/facebook/create-react-app) 
provides, it has all the necessary modules to start building an app.

## Programming

I started out by making a simple flow chart to get a better idea how the flow of the app should look like.
The I decided on the base components that I will need. During the coding proccess I tried to simplify and extract
code into separate modules where possible. One of the things I knew from the start was that I will need to have all
the API calls logic into a separate module.

## Tests

The tests are to check if components render, their output, the state and the events.

## Deployment

A static server can be used to view the app in action.
For environments using [Node](https://nodejs.org/en/), the easiest way to handle this would be to install [serve](https://github.com/zeit/serve).

## Build

The app should be build with npm run build once you have redirected to the root folder of the app (i.e cd user/desktop/my-app), 
in the node command line tool. The build correctly bundles React in production mode and optimizes the build for the best performance.

## Technical Documentation

### General
The mutisearch app is an app that combines the search results of two different search APIs. In this case DuckDuckGo and
Bing. As you type into the input field you get suggestion, clicking on one of the suggestions or results redirects you to the
respective page of that result in the search engine it came from.
The app uses a throttle component to limit the calls of the APIs to once per second.
As the user types every second the APIs are called returning updated results, if the user is not typing the APIs are 
not called.

### Future development

- Implement more APIs to the current pool.
- Improve on the interface design and user experience.
- Responsive design for different screens.