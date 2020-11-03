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

* Books Page: `/`

This page contains all of the user's books. The user can delete the book or mark it as read.

* New Post Page: `/add`

This page contains the form for searching a book by name. Clicking the book card adds it to the library. Clicking again removes it.

* Experience Page: `/report`

This page contains the full statistics report of each year. It displays the monthly average number of books and the quantity of readed books per month.

## License

My Library App is [MIT licensed](./LICENSE).