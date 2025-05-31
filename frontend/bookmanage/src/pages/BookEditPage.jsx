import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Header from '../components/Header';

function BookEditPage() {
  const { id } = useParams();

  return (
    <div>
      <Header />
      <Box sx={{ p: 5 }}>
        <Typography variant="h4">✏️ 작품 수정 페이지</Typography>
        <Typography>수정할 작품 ID: {id}</Typography>
      </Box>
    </div>
  );
}

export default BookEditPage;
