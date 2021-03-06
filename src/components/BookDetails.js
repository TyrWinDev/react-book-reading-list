import { useContext } from "react";
import { BookContext } from "../context/BookContext";

const BookDetails = ({ book }) => {
  const { removeBook } = useContext(BookContext);
  return (
    <li>
      <div className="title"> {book.title}</div>
      <div className="author"> {book.author}</div>
    </li>
  );
};

export default BookDetails;
