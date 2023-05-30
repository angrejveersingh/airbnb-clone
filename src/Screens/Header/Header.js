import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';




function Header() {
  return (
    
    <div className='header'>
      <Link to={"/"}>
        <img
            className='header_icon'
            src='https://www.shutterstock.com/image-photo/kiev-ukraine-april-23-2015-260nw-274367297.jpg'
            alt="airbnb logo"
        />
        </Link>

        <div className='header_center'>
            <input type='text'></input>
            <SearchIcon/>
        </div>

        <div className='header_right'>
          <p>Become a host</p>
          <LanguageIcon/>
          <ExpandMoreIcon/>
          <Avatar/>
        </div>
    </div>
  )
}

export default Header