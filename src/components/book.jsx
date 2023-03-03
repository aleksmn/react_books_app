import { Link, useParams } from "react-router-dom"
import { getBook } from '../services/bookService';

const Book = () => {

    const { id } = useParams()
    // const book = getBooks().filter(b => b._id === id)[0]
    const book = getBook(id)

    // console.log(id)
    // console.log(book)

    return (
        <>
            <h1>{book.title}</h1>
            <ul>
                <li>Автор: {book.author}</li>
                <li>Жанр: {book.genre['name']}</li>
                <li>{book.pages} стр.</li>
            </ul>

            <Link to={'/books'} >К списку книг</Link>
        </>
    );
}

export default Book;