import React from 'react'
import logo from './logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const menuList = ['Home','BookList','작품 등록']
  return (
    <div>
      <div className='nav-logo'>
        <img width={150} src={logo}/>
      </div>
      <div className='search'>
            <div className='search-bar'>
                 <FontAwesomeIcon icon={faSearch}/>
                <input type="text" placeholder='검색할 작품명을 넣어주세요'/>
            </div>
           
        </div>
      <div className='menu-area'>
        <ul className='menu-list'>
            {menuList.map((menu)=>(<li>{menu}</li>))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar