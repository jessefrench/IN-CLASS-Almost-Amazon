import {
  getSingleBook,
  deleteBook,
  getBooks
} from './bookData';

import {
  getSingleAuthor,
  getAuthorBooks,
  deleteSingleAuthor,
  getAuthors
} from './authorData';

// TODO: Get data for viewBook
const getBookDetails = async (bookFirebaseKey) => {
  const bookObject = await getSingleBook(bookFirebaseKey);
  const authorObject = await getSingleAuthor(bookObject.author_id);
  return { ...bookObject, authorObject };
};

// TODO: Get data for viewAuthor
const getAuthorDetails = async (firebaseKey) => {
  const authorObject = await getSingleAuthor(firebaseKey);
  const authorBooks = await getAuthorBooks(firebaseKey);
  return { author: authorObject, books: authorBooks };
};

// TODO: Delete author's books when author is deleted
const deleteAuthorAndAuthorBooks = async (authorFirebaseKey) => {
  const authorBooks = await getAuthorBooks(authorFirebaseKey);
  const deleteBookPromises = await authorBooks.map((authorBookObject) => deleteBook(authorBookObject.firebaseKey));

  Promise.all(deleteBookPromises).then(() => deleteSingleAuthor(authorFirebaseKey));
};

// TODO: STRETCH...SEARCH STORE
const searchStore = async (searchValue, uid) => {
  const allBooks = await getBooks(uid);
  const allAuthors = await getAuthors(uid);

  const filteredBooks = await allBooks.filter((book) => (
    book.title.toLowerCase().includes(searchValue)
    || book.description.toLowerCase().includes(searchValue)
    || book.price.includes(parseInt(searchValue, 10))
  ));

  const filteredAuthors = await allAuthors.filter((author) => (
    author.first_name.toLowerCase().includes(searchValue)
    || author.last_name.toLowerCase().includes(searchValue)
    || author.email.toLowerCase().includes(searchValue)
  ));

  return { authors: filteredAuthors, books: filteredBooks };
};

export {
  getBookDetails,
  getAuthorDetails,
  deleteAuthorAndAuthorBooks,
  searchStore
};
