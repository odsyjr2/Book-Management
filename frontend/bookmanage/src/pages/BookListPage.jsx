import Header from '../components/Header';
import BookCard from '../components/BookCard';
import { Typography, Grid, Box, Container } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'; // ✅ 아이콘 추가
import { useEffect, useState } from 'react';
import bookData from '../data.json';

function BookListPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(bookData);
  }, []);

  return (
    <div>
      <Header />

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
                    imageUrl={book.imageUrl}
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
