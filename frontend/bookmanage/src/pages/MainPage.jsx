import Header from '../components/Header';
import SimpleBookCard from '../components/SimpleBookCard';
import { Container, Typography, Grid, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import bookData from '../data.json';

function MainPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // 추천 도서 3개만 (id 기준 앞쪽에서 잘라옴)
    setBooks(bookData.slice(0, 3));
  }, []);

  return (
    <div>
      <Header />
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" fontWeight="bold">
            이달의 책 👑
          </Typography>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          {books.map((book) => (
            <Grid item key={book.id}>
              <SimpleBookCard
                id={book.id}
                title={book.title}
                imageUrl={book.imageUrl}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default MainPage;
