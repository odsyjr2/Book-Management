import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Grid,
  CardMedia,
  Container,
  Button
} from '@mui/material';
import Header from '../components/Header';
import axios from 'axios';


function BookDetailPages() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  // 책 데이터 요청
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/books/${id}`);
        setBook(response.data.data); // 서버에서 받은 책 데이터
      } catch (error) {
        console.error('책을 가져오는 중 오류 발생:', error);
      }
    };

    fetchBook();
  }, [id]); // id가 변경될 때마다 다시 요청


  // 책을 찾을 수 없는 경우 처리
  if (!book) {
    return (
      <Box sx={{ p: 5 }}>
        <Typography variant="h6">책을 찾을 수 없습니다.</Typography>
      </Box>
    );
  }

  const handleEdit = () => {
    navigate(`/books/${id}/edit` , { state: { book } });
  };

  return (
    <div>
      
      {/* Header 아래 여백 넉넉하게 */}
      <Container maxWidth="md" sx={{ pt: 8, pb: 5 }}>
        {/* 오른쪽 끝에 수정 버튼 */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <Button variant="outlined" size="small" onClick={handleEdit}>
            작품 수정
          </Button>
        </Box>

        <Grid container spacing={4}>
          {/* 왼쪽: 책 이미지 */}
          <Grid item xs={12} md={4}>
            <CardMedia
              component="img"
              image={book.coverImageUrl}
              alt={book.title}
              sx={{ width: 180, height: 260 }}
            />
          </Grid>

          {/* 오른쪽: 제목 + 정보 */}
          <Grid item xs={12} md={8}>
            {/* 제목 */}
            <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>
              {book.title}
            </Typography>

            {/* 작성자 & 작성일 */}
            <Typography variant="subtitle1" gutterBottom>
              작성자: {book.author}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              작성일: {book.date}
            </Typography>

            {/* 본문 */}
            <Typography variant="body1" sx={{ mt: 4 }}>
              {book.description}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default BookDetailPages;