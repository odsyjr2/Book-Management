import { Card, CardMedia, CardContent, Typography } from '@mui/material';

function BookCard({ title, imageUrl }) {
  return (
    <Card sx={{ maxWidth: 300, margin: 'auto' }}>
      <CardMedia
        component="img"
        image={imageUrl || '/default-cover.jpg'}
        alt={title}
        sx={{ height: 200, objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h6" noWrap>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BookCard;