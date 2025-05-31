import { useState } from 'react';
import Header from '../components/Header';
import WritingForm from '../components/WritingForm';
import GenerateImageButton from '../components/GenerateImageButton';
import ImagePreview from '../components/ImagePreview';
import NextButton from '../components/NextButton';
import { createBook, generateImage } from '../openAiService';
import { useLocation, useNavigate } from 'react-router-dom';

function BookDetailPage() {
  const [apiKey, setApiKey] = useState('');
  const navigate = useNavigate();  
  const location = useLocation();
  const { title, content } = location.state || {};
  const [formData, setFormData] = useState({
    title: title || '',
    content: content || '',
    coverImageUrl: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (field) => (value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleGenerateCover = async () => {
    setLoading(true);
    try {
      const url = await generateImage(apiKey, formData.title, formData.content);
      setFormData((prev) => ({ ...prev, coverImageUrl: url }));
    } catch (err) {
      alert('이미지 생성 실패: ' + err.message);
    }
    setLoading(false);
  };

  const handleSubmit = async () => {
    try {
      console.log("보낼 데이터", formData)
      await createBook(formData);
      alert('도서 등록 성공!');
      navigate('/books');
      setFormData({ title: '', content: '', coverImageUrl: '' });
    } catch {
      alert('도서 등록 실패');
    }
  };

  return (
    <div>
      <Header />
      <main className="p-6 space-y-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold">📘 도서 등록</h2>

        <WritingForm
          label="1. 제목 입력"
          value={formData.title}
          onChange={handleChange('title')}
          rows={2}
        />

        <WritingForm
          label="2. 작품 내용"
          value={formData.content}
          onChange={handleChange('content')}
          rows={5}
        />

        <div>
          <label className="block font-semibold mb-1">3. OpenAI API Key</label>
          <input
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="API Key 입력"
            className="w-full border p-2 rounded"
          />
        </div>

        <GenerateImageButton onClick={handleGenerateCover} loading={loading} />

        <ImagePreview imageUrl={formData.coverImageUrl} />

        <NextButton onClick={handleSubmit}>도서 등록</NextButton>
      </main>
    </div>
  );
}

export default BookDetailPage;
