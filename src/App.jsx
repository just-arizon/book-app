import { useState } from "react";
import "./App.css";
import Book from "./Book";
import MasteringReact from "./assets/mastering react.svg";
import PracticalReact from "./assets/practical react.svg";
import ReactInAction from "./assets/react in action.svg";
// import './styles.css';

function App() {
  const books = [
    {title: 'Mastering React', author: 'Anthony Pham', cover: MasteringReact},
    {title: 'Practical React', author: 'Alex Johnson', cover: PracticalReact},
    {title: 'React in Action', author: 'Bob Climo', cover: ReactInAction}
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

  return (
    <main>
        <h1>Favorite Books</h1>

      <div className="book-list">
       {renderedNames}
      </div>
    </main>
  );
}

export default App;
