import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Grid,
  CardMedia,
  Container,
  Button
} from '@mui/material';
import Header from '../components/Header';
import bookData from '../data.json';

function BookDetailPages() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = bookData.find((b) => String(b.id) === id);

  if (!book) {
    return (
      <Box sx={{ p: 5 }}>
        <Typography variant="h6">책을 찾을 수 없습니다.</Typography>
      </Box>
    );
  }

  const handleEdit = () => {
    navigate(`/books/${id}/edit`);
  };

  return (
    <div>
      <Header />
      <Container maxWidth="md" sx={{ py: 5 }}>
        <Grid container spacing={4}>
          {/* 왼쪽: 책 이미지 */}
          <Grid item xs={12} md={4}>
            <CardMedia
              component="img"
              image={book.imageUrl}
              alt={book.title}
              sx={{ width: 180, height: 260 }}
            />
          </Grid>

          {/* 오른쪽: 책 정보 */}
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 4
              }}
            >
              <Typography variant="h4" fontWeight="bold">
                {book.title}
              </Typography>
              <Button
                variant="outlined"
                size="small"
                onClick={handleEdit}
              >
                작품 수정
              </Button>
            </Box>

            <Typography variant="subtitle1" gutterBottom>
              작성자: {book.author}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              작성일: {book.date}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              {book.description}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default BookDetailPages;
