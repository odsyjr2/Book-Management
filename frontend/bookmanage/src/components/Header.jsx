import { AppBar, Toolbar, Box, Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import logoimg from './logo.png';

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1e3a8a' }}>
      <Toolbar sx={{ position: 'relative', minHeight: '70px' }}>
        {/* 왼쪽: 텍스트 링크 */}
        <Box sx={{ flex: 1 }}>
          <MuiLink
            component={Link}
            to="/"
            underline="none"
            color="inherit"
            sx={{ fontWeight: 'bold', fontSize: '20px' }}
          >
            걷기가 서재
          </MuiLink>
        </Box>

        {/* 가운데: 이미지 */}
        <Box
          sx={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <img src={logoimg} alt="로고" style={{ width: '50px', height: '50px' }} />
        </Box>

        {/* 오른쪽: 메뉴 링크들 */}
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: 3 }}>
          <MuiLink component={Link} to="/" underline="none" color="inherit">
            HOME
          </MuiLink>
          <MuiLink component={Link} to="/books" underline="none" color="inherit">
            작품목록
          </MuiLink>
          <MuiLink component={Link} to="/write" underline="none" color="inherit">
            작품등록
          </MuiLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
