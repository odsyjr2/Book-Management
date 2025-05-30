import React, { useState } from "react";
import { TextField, Button, CircularProgress } from "@mui/material";
import { createBook, generateImage } from "./openAiService";

function BookDetailPage() {
  // 선언
  const [apiKey, setApiKey] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    imageUrl: "",
  });
  const [loading, setLoading] = useState(false);
  const [submittedBooks, setSubmittedBooks] = useState([]);


  // 입력값이 변경될 때 호출
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // 이미지 생성 버튼 클릭 시 호출 
  const handleGenerateCover = async () => {
    setLoading(true);
    try {
      const url = await generateImage(apiKey, formData.title, formData.content);
      setFormData((prev) => ({ ...prev, imageUrl: url }));
    } catch (err) {
      alert("이미지 생성 실패: " + err.message);
    }
    setLoading(false);
  };
  
  //
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBook(formData);
      setSubmittedBooks((prev) => [...prev, formData]); // 리스트 추가
      setFormData({ title: "", content: "", imageUrl: "" });
    } catch {
      alert("도서 등록 실패");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>도서 등록</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          name="title"
          label="제목"
          fullWidth
          margin="normal"
          value={formData.title}
          onChange={handleChange}
        />
        <TextField
          name="content"
          label="내용"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={formData.content}
          onChange={handleChange}
        />
        <TextField
          label="OpenAI API Key"
          fullWidth
          margin="normal"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
        />
        <Button onClick={handleGenerateCover}  variant="outlined">
          이미지 생성
        </Button>
        {loading && <CircularProgress style={{ margin: "1rem" }} />} {/*로딩 이미지*/}
        {formData.imageUrl && <img src={formData.imageUrl} alt="Generated" width="300" />}

        <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: "1rem" }}>
          도서 등록
        </Button>
      </form>

      <h3 style={{ marginTop: "2rem" }}>등록된 도서 목록</h3>
      {submittedBooks.map((book, idx) => (
        <div key={idx} style={{ marginTop: "1rem", border: "1px solid #ccc", padding: "1rem" }}>
          <h4>{book.title}</h4>
          <p>{book.content}</p>
          {book.imageUrl && <img src={book.imageUrl} alt="book" width="200" />}
        </div>
      ))}
    </div>
  );
}

export default BookDetailPage;
