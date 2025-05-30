import {Link} from 'react-router-dom'
import './App.css';
import Home from './Home'
import BookList from './Booklist';
import BookDetail from './BookDetail';
import Navbar from './Navbar';
import routers from './routers';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routers}/>
    </div>
  );
}

export default App;
