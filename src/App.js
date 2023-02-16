import { Route, Routes } from 'react-router-dom';
import Books from './components/books';
import Home from './components/home';
import About from './components/about';
import Contacts from './components/contacts';

function App() {
  return (

    <main className='container py-4 py-lg-5'>
      {/* <h2>Список для чтения</h2> */}
      {/* <Books /> */}

      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/books" element={< Books />} />
        <Route path="/about" element={< About />} />
        <Route path="/contacts" element={< Contacts />} />
      </Routes>
    </main>
  );
}

export default App;
