import axios from 'axios'
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import BookCard from '../components/BookCard';
import { Container, Grid, Typography } from '@mui/material';

function BookListPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/books')
      .then((res) => {
        const serverBooks = res.data.data;
        setBooks(serverBooks);
      })
      .catch((err) => {
        console.error('도서 목록 불러오기 실패:', err);
      });
  }, []);

  return (
    <>
      <Header />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          📚 등록된 작품 목록
        </Typography>
        <Grid container spacing={3}>
          {books.map((book) => (
            <Grid item key={book.id} xs={12} sm={6} md={4}>
              <BookCard title={book.title} imageUrl={book.coverImageUrl} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default BookListPage;
