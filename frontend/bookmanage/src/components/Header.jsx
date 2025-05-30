import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-blue-900 text-white">
      <div className="text-xl font-bold">📘 MyBook</div>
      <nav className="space-x-4">
        <Link to="/mypage" className="hover:underline">Mypage</Link>
        <Link to="/write" className="hover:underline">작품등록</Link>
        <Link to="/books" className="hover:underline">작품보기</Link>
      </nav>
    </header>
  );
}

export default Header;
