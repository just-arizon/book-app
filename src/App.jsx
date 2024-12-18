import React from 'react'
import Book from "./Book";
import MasteringReact from "./assets/mastering react.svg";
import PracticalReact from "./assets/practical react.svg";
import ReactInAction from "./assets/react in action.svg";
import ReactIsLibrary from "./assets/react is a library.svg";
import "./App.css";
const App = () => {
  const books = [
    {title: 'Mastering React', author: 'Anthony Pham', cover: MasteringReact},
    {title: 'Practical React', author: 'Alex Johnson', cover: PracticalReact},
    {title: 'React in Action', author: 'Bob Climo', cover: ReactInAction},
    {title: 'React is a Library', author: '  Nathan Sanford', cover: ReactIsLibrary}
  
  ];

  const renderedNames = books.map((book) => {
    return (

          <Book
          key={crypto.randomUUID()}
          title={book.title}
          author={book.author}
          cover={book.cover}
          />

    )
});
console.log(renderedNames);

  return (
     <main>
        <h1>Favorite Books</h1>

      <div className="book-list">
       {renderedNames}
      </div>
    </main>
  )
}

export default App