import {Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './Home'
import BookList from './Booklist';
import BookDetail from './BookDetail';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/bookList' element={<BookList/>} />
        <Route path='/bookList/:id' element={<BookDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
