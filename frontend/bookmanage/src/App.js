import React, { useState,useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from './pages/MainPage';
import NewBook from './pages/NewBook';
import GenerateImage from './pages/GenerateImage';
import BookListPage from './pages/BookListPage';
import BookDetailPage from "./pages/BookDetailPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/generate-image" element={<BookDetailPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/write" element={<NewBook />} />
          {/* <Route path="/generate-image" element={<GenerateImage />} /> */}
          <Route path="/books" element={<BookListPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
