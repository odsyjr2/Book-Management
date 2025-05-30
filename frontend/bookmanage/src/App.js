import React, { useState } from "react";
import BookDetailPage from "./BookDetailPage";

function App() {

  // page, setPage 선언
  const [page, setPage] = useState("add"); // 'add' 또는 'list'


  // page 가 add일 때
  return (
    <div className="App">
      {page === "add" && <BookDetailPage onBookCreated={() => setPage("list")} />}
    </div>
  );
}

export default App;
