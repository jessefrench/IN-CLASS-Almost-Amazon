import { signOut } from '../utils/auth';
import { getBooks, booksOnSale } from '../api/bookData';
import { showBooks } from '../pages/books';
import { getAuthors, favoriteAuthor } from '../api/authorData';
import { showAuthors } from '../pages/authors';
// import { searchStore } from '../api/mergedData';
// import clearDom from '../utils/clearDom';
// import renderToDOM from '../utils/renderToDom';

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // TODO: BOOKS ON SALE
  document.querySelector('#sale-books').addEventListener('click', () => {
    booksOnSale().then(showBooks);
  });

  // TODO: ALL BOOKS
  document.querySelector('#all-books').addEventListener('click', () => {
    getBooks().then(showBooks);
  });

  // FIXME: STUDENTS Create an event listener for the Authors
  // 1. When a user clicks the authors link, make a call to firebase to get all authors
  // 2. Convert the response to an array because that is what the makeAuthors function is expecting
  // 3. If the array is empty because there are no authors, make sure to use the emptyAuthor function
  document.querySelector('#authors').addEventListener('click', () => {
    console.warn('CLICKED AUTHORS');
    getAuthors().then(showAuthors);
  });

  // TODO: FAVORITE AUTHORS
  document.querySelector('#favorite-authors').addEventListener('click', () => {
    favoriteAuthor().then(showAuthors);
  });

  // STRETCH: SEARCH
  // document.querySelector('#search').addEventListener('keyup', (e) => {
  //   const searchValue = document.querySelector('#search').value.toLowerCase();
  //   console.warn(searchValue);

  //   // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
  //   if (e.keyCode === 13) {
  //     // MAKE A CALL TO THE API TO FILTER ON THE BOOKS
  //     // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
  //     // OTHERWISE SHOW THE STORE

  //     // document.querySelector('#search').value = '';
  //     searchStore(searchValue).then(({ books, authors }) => {
  //       if (books.length > 0) {
  //         showBooks(books);
  //       } else if (authors.length > 0) {
  //         showAuthors(authors);
  //       } else {
  //         clearDom();
  //         const domString = '<h1>No Results</h1>';
  //         renderToDOM('#store', domString);
  //       }
  //     });
  //   }
  // });
};

export default navigationEvents;
