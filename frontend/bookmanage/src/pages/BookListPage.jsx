import Header from '../components/Header';
import BookCard from '../components/BookCard';
import { Typography, Grid, Box, Container } from '@mui/material';
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
      <Box sx={{ py: 5, textAlign: 'center' }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          📚 작품 보기
        </Typography>
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
