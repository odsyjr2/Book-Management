import BookCard from '../components/BookCard';
import { Typography, Grid, Box } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { useEffect, useState } from 'react';
import axios from 'axios'

function BookListPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        // 백엔드 서버에서 책 데이터 가져오기
        const response = await axios.get('http://localhost:8080/books');
        
        // 서버에서 받은 데이터를 상태에 설정
        setBooks(response.data.data); // 여기서 "data" 배열을 상태에 설정
      } catch (error) {
        console.error('책 데이터를 가져오는 중 오류 발생:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      {/* 전체 콘텐츠 박스 */}
      <Box sx={{ py: 5, textAlign: 'center' }}>
        {/* 제목 (아이콘 + 텍스트) */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mb: 6 }}>
          <LibraryBooksIcon sx={{ fontSize: 36, color: 'primary.main' }} />
          <Typography variant="h4" fontWeight="bold">
            작품 목록
          </Typography>
        </Box>

        {/* 카드 묶음 컨테이너 */}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ maxWidth: '1000px', width: '100%' }}>
            <Grid container spacing={4}>
              {books.map((book) => (
                <Grid item xs={12} sm={6} md={4} key={book.id}>
                  <BookCard
                    id={book.id}
                    title={book.title}
                    imageUrl={book.coverImageUrl || 'https://via.placeholder.com/180x260?text=No+Image'}
                    showTitleFirst={true}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default BookListPage;
