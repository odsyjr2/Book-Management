import { Link } from 'react-router-dom';
import logoimg from './logo.png'

function Header() {
  const headerStyle = {
    backgroundColor: '#1e3a8a', // Tailwind의 bg-blue-900에 해당
    color: 'white',
    padding: '16px 24px',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const logoStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const centerTextStyle = {
    fontSize: '18px',
    fontWeight: '600',
  };

  const navStyle = {
    display: 'flex',
    gap: '24px',
    fontSize: '14px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
  };

  const linkHoverStyle = {
    textDecoration: 'underline',
  };

  return (
   <header style={headerStyle}>
      <div style={containerStyle}>
        <div style={logoStyle}>
          <Link to = "/" style={linkStyle}> 걷기가 서재 </Link>
        </div>
        <div style={centerTextStyle}> <img src = {logoimg} style={{ width: '50px', height: '50px' }}/> </div>
        <nav style={navStyle}>
          <Link to="/books" style={linkStyle}>작품보기</Link>
          <Link to="/write" style={linkStyle}>작품등록</Link>
          <Link to="/edit" style={linkStyle}>작품수정</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
