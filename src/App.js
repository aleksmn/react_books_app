import { Navigate, Route, Routes } from 'react-router-dom';
import Books from './components/books';
// import Home from './components/home';
import About from './components/about';
import Contacts from './components/contacts';
import NotFound from './components/notFound';
import NavBar from './components/common/navBar';
import Book from './components/book';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import BookForm from './components/bookForm';

function App() {
  return (
    <>
      <NavBar />
      <main className='container py-4 py-lg-5'>

        <Routes>

          {/* <Route path="/" element={< Home />} /> */}
          <Route path="/books" element={< Books />} />
          <Route path="/books/:id" element={< Book />} />
          <Route path="/books/new" element={< BookForm />} />
          <Route path="/login" element={< LoginForm />} />
          <Route path="/register" element={< RegisterForm />} />
          <Route path="/about" element={< About />} />
          <Route path="/contacts" element={< Contacts />} />
          <Route path="*" element={< NotFound />} />
          <Route path="/" element={<Navigate to="/books" />} />

        </Routes>
      </main>
    </>
  );
}

export default App;
