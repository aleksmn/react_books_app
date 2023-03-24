import React, { Component } from 'react';
import BooksTable from './booksTable'
import { getBooks } from '../services/bookService';
import { getGenres } from '../services/genreService';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import _ from 'lodash';
import SearchBox from './searchBox';

// imrc - shortcut create react component
// cc - create class

class Books extends Component {
  state = {
    books: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    searchQuery: "",
    selectedGenre: null,
    sortColumn: { path: 'title', order: 'asc' }
  };

  componentDidMount() {
    const genres = [{ name: 'Все жанры', _id: '' }, ...getGenres()]
    this.setState({ books: getBooks(), genres: genres });
  }

  handleDelete = (book) => {
    // console.log(book)
    const books = this.state.books.filter(b => b._id !== book._id)
    this.setState({ books: books })
  }

  handleLike = book => {
    // console.log('Лайк!', book)

    const books = [...this.state.books];
    const index = books.indexOf(book);
    books[index] = { ...books[index] };
    books[index].liked = !books[index].liked;
    this.setState({ books })

  }

  handlePageChange = page => {
    // console.log(page);
    this.setState({ currentPage: page });
  }


  handleGenreSelect = genre => {
    // console.log(genre);

    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 })
  }
  handleSearch = query => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  handleSort = sortColumn => {

    this.setState({ sortColumn, currentPage: 1 });
  }

  getPagedData = () => {

    const { books:allBooks, selectedGenre, sortColumn, currentPage, pageSize, searchQuery } = this.state;

    // const filteredBooks = selectedGenre && selectedGenre._id
    //   ? books.filter(m => m.genre._id === selectedGenre._id)
    //   : books;

    let filtered = allBooks;
    if (searchQuery)
      filtered = allBooks.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filtered = allBooks.filter(m => m.genre._id === selectedGenre._id);

    const sortedBooks = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])

    const pagedBooks = paginate(sortedBooks, currentPage, pageSize);

    return { totalCount: filtered.length, books: pagedBooks }
  }

  render() {

    const { genres, selectedGenre, sortColumn, currentPage, pageSize, searchQuery } = this.state;

    if (this.state.books.length === 0) return <p>Здесь нет ни одной книги :(</p>

    const result = this.getPagedData()

    return (
      <>
        <h1>Список для чтения</h1>
        <div className='row'>
          <div className="col-lg-2 my-5">
            <ListGroup
              items={genres}
              onItemSelect={this.handleGenreSelect}
              selectedItem={selectedGenre}
            />
          </div>
          <div className="col">
            <p>В списке книг: {result.totalCount}</p>
            <SearchBox value={searchQuery} onChange={this.handleSearch} />
            <BooksTable
              books={result.books}
              sortColumn={sortColumn}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={result.totalCount}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </>);
  }
}

export default Books;


