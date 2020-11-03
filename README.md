# My Library App

## Introduction

Demo: [My Library App](https://my-library-app.vercel.app/)

My Library App is a local library where the user can store his books. The user can tag which books he reads and the system will register in what month and year it is done. This app uses [Open Library](https://openlibrary.org/) API for querying the books, bringing its author and publishing year. The report page will bring all the statistics regarding the number of books readed in each month and year. The data is saved in Local Storage.

## Installation

```sh
npm install
```

## Running the project

```sh
npm start
```

The project runs on [port 3000](http://localhost:3000/).

## Testing

Unit and end-to-end tests are implemented, so you can verify the integrity of your software.

```sh
npm test
```

## Pages

The pages are locally routed with the aid of react-router.

### Books Page: `/`

This page contains all of the user's books. The user can delete the book or mark it as read.

### New Post Page: `/add`

This page contains the form for searching a book by name. Clicking the book card adds it to the library. Clicking again removes it.

### Experience Page: `/report`

This page contains the full statistics report of each year. It displays the monthly average number of books and the quantity of readed books per month.

## Technologies Utilized

### `AngularJS / ReactJS`

The selected framework was React. I have a lot of experience in React, so it is my framework's choice. React is a powerful tool for creating Single Page Applications (SPA), using a component-based approach. The app can be  breaked in a lot of small parts, so reusability and scalability are very important things in React.

This React project was created using the create-react-app boilerplate. Create React App is a tool that gives a head start when building React apps. It saves from time-consuming setup and configuration. It uses Webpack and Babel under the hood.

### `Bootstrap / Semantic-UI`

No CSS frameworks were uilized in this project. All the styling is done in pure CSS with an aid of Styled-Components. It is a CSS-in-JS library, in which reusable styling components can be created very rapidly. Styled-Components eliminates CSS class conflicts, and provides a very scalable environment for styling.

### `Gulp / Grunt`

None of theses tools were utilized.

### `Sass / Less / Stylus`

CSS-in-JS with Styled-Components. All the styling is done in pure CSS with an aid of Styled-Components. It is a CSS-in-JS library, in which reusable styling components can be created very rapidly. Styled-Components eliminates CSS class conflicts, and provides a very scalable environment for styling.

### `Babel / CoffeeScript / ES5`

Some ES5 features were utilized: Array.map(), Array.filter(), JSON.parse(), JSON.stringify(), Date.now(). 

Some ES6 features were also utilized: let and const keywords, arrow functions, default parameter values, function rest parameter, Array.findIndex.

All these features make coding a lot easier and consistent. They greatly reduce the amount of code lines. Babel were used as a transpiler to older javascript versions, so the build code can be run on almost all browsers.

### `NPM / Bower`

NPM was the choice for package manager. NPM helps installing packages for the project, as well as configuring command line commands as npm install, npm start and npm test. After various updates along these years, it is faster than ever now. A great tool, obligatory for React projects.

## License

My Library App is [MIT licensed](./LICENSE).