import { useParams } from "react-router-dom";
import Form from "./common/form";
import { getGenres } from "../services/genreService";
import { getBook, saveBook } from "../services/bookService";


class BookForm extends Form {
    state = {
        data: {
          title: "",
          genreId: "",
          author: "",
          pages: ""
        },
        genres: [],
        errors: {}
      };

    validate = () => {
        const errors = {...this.state.errors};
        const { data } = this.state;

        if (data.title.trim() === '') {
            errors.title = 'Нужно название книги.'
        }

        if (data.author.trim() === '') {
            errors.author = 'Нужно ввести автора.'
        }
        
        return  Object.keys(errors).length === 0 ? null : errors;
    }


    validateProperty = input => {
        if (input.name === 'title') {
            if (input.value.trim() === '') return 'Нужно название книги.'
            // ...
        }
        if (input.name === 'author') {
            if (input.value.trim() === '') return 'Нужно ввести автора.'
            // ...
        }
    }

    componentDidMount() {
        const genres = getGenres();
        this.setState({ genres });

        // let { id } = this.props.params;
        
        console.log(this.props.params)
    
        // const bookId = id;

        // if (bookId === "new") return;
    
        // const book = getBook(bookId);
        // if (!book) return this.props.history.replace("/not-found");
    
        // this.setState({ data: this.mapToViewModel(book) });
    }

    mapToViewModel(book) {
        return {
          _id: book._id,
          title: book.title,
          author: book.author,
          genreId: book.genre._id,
          pages: book.pages
        };
    }

    doSubmit = () => {
        saveBook(this.setState.data)
        this.props.history.push("/books")
    }

    render() {
        

        return (
            <div className='container' style={{ 'maxWidth': '600px' }}>
                <h1>Добавить книгу</h1>

                <form onSubmit={this.handleSubmit}>

                    {this.renderInput("title", "Название")}
                    {this.renderInput("author", "Автор")}
                    {this.renderSelect("genreId", "Жанр", this.state.genres)}
                    {this.renderInput("pages", "Страницы", "number")}
                    {this.renderButton("Сохранить")}

                </form>


            </div>
        );
    }
}
 
export default (props) => (
    <BookForm
        {...props}
        params={useParams()}
    />);