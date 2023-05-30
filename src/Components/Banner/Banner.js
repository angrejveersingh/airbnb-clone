import React, { useState } from 'react'
import './Banner.css'
import { Button } from '@mui/material'
import Search from '../../Components/Search/Search'
import { useNavigate  } from "react-router-dom"
// import { unstable_HistoryRouter } from 'react-router-dom'

function Banner() {
    // const history = unstable_HistoryRouter();
    const navigate = useNavigate();
const [showSearch, setShowSearch] = useState(false);

  return (
    <div className='banner'>
        <div className='banner_search'>
            {showSearch && <Search/>}
            <Button onClick={()=>{
                setShowSearch(!showSearch)
            }}
            className='banner_searchButton'
            variant='outlined'>
                {showSearch ? "Hide":"Search Dates"}
            </Button>
        </div>
        <div className='banner_info'>
            <h1>Get out and stretch you imagination</h1>
            <h5>
                Plan a different kind of getaway to uncover the hidden gems near you.
            </h5>
            <Button onClick={()=>{
                navigate("/search")
            }}
            variant='outlined'>Explore</Button>
        </div>
    </div>
  )
}

export default Banner