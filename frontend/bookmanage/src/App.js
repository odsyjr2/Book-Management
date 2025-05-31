import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import NewBook from './pages/NewBook';
import GenerateImage from './pages/GenerateImage';
import BookListPage from './pages/BookListPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/new-book" element={<NewBook />} />
        <Route path="/generate-image" element={<GenerateImage />} />
        <Route path="/books" element={<BookListPage />} />

      </Routes>
    </Router>
  );
}

export default App;
