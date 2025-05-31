import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Header from '../components/Header';
import WritingForm from '../components/WritingForm';
import NextButton from '../components/NextButton';

function NewBook() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleNext = async () => {
    try {
      const formData = { title, description, content };
      console.log('입력된 책 데이터:', formData);

      // 백엔드에 책 생성 요청
      const response = await axios.post('http://localhost:8080/books', formData);
      const createdBook = response.data.data;

      // 생성된 책 ID와 입력 정보 전달
      navigate('/generate-image', {
        state: {
          id: createdBook.id,
          title: createdBook.title,
          content: createdBook.content,
        }
      });
    } catch (error) {
      console.error('책 생성 실패:', error);
      alert('책 생성에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div>
      <Header />
      <main className="p-6 space-y-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold">📘 작품 등록</h2>

        <WritingForm
          label="1. 제목 입력"
          value={title}
          onChange={setTitle}
          rows={2}
        />

        <WritingForm
          label="2. 작품 소개"
          value={description}
          onChange={setDescription}
          rows={3}
        />

        <WritingForm
          label="3. 작품 내용"
          value={content}
          onChange={setContent}
          rows={5}
        />

        <NextButton onClick={handleNext} />
      </main>
    </div>
  );
}

export default NewBook;
