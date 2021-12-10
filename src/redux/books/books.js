import React from 'react';

const bookList = [
  {
    booktitle: 'Pride and Prejudice',
    author: 'Jane Austen',
    Category: 'Romance',
    id: '1',
  },
  {
    booktitle: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    Category: 'Fiction',
    id: '2',
  },
  {
    booktitle: 'The Art of Deception',
    author: 'Kevin Mitnick',
    Category: 'Documentary',
    id: '3',
  },
  {
    booktitle: 'The Art of Intrusion',
    author: 'Kevin Mitnick',
    Category: 'Documentary',
    id: '3',
  },
  {
    booktitle: 'The Art of Invisibility',
    author: 'Kevin Mitnick',
    Category: 'Documentary',
    id: '3',
  },
];
const Books = () => (
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
        </li>
      ))}
    </ul>
    <form className="add-book-section">
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

export default Books;