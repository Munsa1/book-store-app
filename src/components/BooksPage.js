import React from 'react';

const bookList = [
  {
    booktitle: ' Pride and Prejudice',
    author: ' Jane Austen',
    Category: ' Romance',
    id: '1',
  },
  {
    booktitle: ' The Great Gatsby',
    author: ' F. Scott Fitzgerald',
    Category: ' Fiction',
    id: '2',
  },
];
const BooksPage = () => (
  <div className="books">
    <ul className="books-list-section">
      {bookList.map((book) => (
        <li key={book.id}>
          <p>
            Book:
            {book.booktitle}
          </p>
          <p>
            Author:
            {book.author}
          </p>
          <p>
            Category:
            {book.Category}
          </p>
          <button type="button">Remove</button>
        </li>
      ))}
    </ul>
    <form className="add-book-section">
      <h1>ADD NEW BOOK</h1>
      <input type="text" name="Book title" />
      <select>
        <option value="">Category</option>
        <option value="Romance">Romance</option>
        <option value="Documentary">Documentary</option>
        <option value="Fiction">Fiction</option>
        <option value="Crime">Crime</option>
      </select>
    </form>
  </div>
);

export default BooksPage;