import React, { useState,useEffect } from "react";
import BookDetailPage from "./BookDetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  // page, setPage 선언
  const [page, setPage] = useState("add"); // 'add' 또는 'list'


  // 임의 등록 페이지 localhost:3000/books
  useEffect(() => {
    if (window.location.pathname === "/books") {
      setPage("add");
    } else {
      setPage("home");
    }
  }, []);

  // page 가 add일 때
  return (
    <div className="App">
      {page === "add" && <BookDetailPage />}
    </div>
  );
}

export default App;
