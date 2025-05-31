import Header from '../components/Header';
import BookCard from '../components/BookCard';

function BookListPage() {
  const books = [
    {
      id: 1,
      title: '비 오는 날의 산책',
      imageUrl: 'https://via.placeholder.com/150x220?text=AI+1',
    },
    {
      id: 2,
      title: '별 헤는 밤',
      imageUrl: 'https://via.placeholder.com/150x220?text=AI+2',
    },
    {
      id: 3,
      title: '숲 속의 이야기',
      imageUrl: 'https://via.placeholder.com/150x220?text=AI+3',
    },
  ];

  return (
    <div>
      <Header />
      <main className="p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">📚 등록된 작품 목록</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {books.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              imageUrl={book.imageUrl}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default BookListPage;
