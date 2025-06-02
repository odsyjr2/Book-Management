import Header from '../components/Header';
import SimpleBookCard from '../components/SimpleBookCard';
import { Container, Typography, Grid, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { fetchBooks } from '../api/bookservice';

function MainPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchRecommendedBooks = async () => {
      try {
        const data = await fetchBooks();
        setBooks(data.slice(0, 3)); // 앞에서 3개만 잘라오기
      } catch (error) {
        console.error('추천 도서 불러오기 실패:', error);
      }
    };

    fetchRecommendedBooks();
  }, []);

  return (
    <div>
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" fontWeight="bold">
            이달의 책 👑
          </Typography>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          {books.map((book) => (
            <Grid item key={book.bookId}>
              <SimpleBookCard
                id={book.bookId}
                title={book.title}
                imageUrl={book.coverImageUrl}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default MainPage;