import Header from '../components/Header';
import BookCard from '../components/BookCard';

function MainPage() {
  const recommendedBooks = [
    {
      id: 1,
      title: '이달의 책 1',
      imageUrl: 'https://via.placeholder.com/150x220?text=책+1',
    },
    {
      id: 2,
      title: '이달의 책 2',
      imageUrl: 'https://via.placeholder.com/150x220?text=책+2',
    },
    {
      id: 3,
      title: '이달의 책 3',
      imageUrl: 'https://via.placeholder.com/150x220?text=책+3',
    },
  ];

  return (
    <div>
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-bold mb-4">이달의 책 👑</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recommendedBooks.map(book => (
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

export default MainPage;