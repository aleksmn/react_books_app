import { useParams } from "react-router-dom"

const Book = () => {
    const { id } = useParams()
    return (

        <h1>Книга {id}</h1>

    );
}

export default Book;