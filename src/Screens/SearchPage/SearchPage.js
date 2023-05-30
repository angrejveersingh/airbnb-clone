import React from 'react'
import "./SearchPage.css"
import { Button } from '@mui/material'
import SearchResult from '../../Components/SearchResult/SearchResult'

function SearchPage() {
  return (
    <div className='searchPage'>
        <div className='searchPage_info'>
            <p>60 Stays. 2guests</p>
            <h1>Stay nearby</h1>
            <Button variant='outlined'>Cancel Flexibility</Button>
            <Button variant='outlined'>Price</Button>
            <Button variant='outlined'>Rooms and beds</Button>
            <Button variant='outlined'>Type of Place</Button>
            <Button variant='outlined'>More Filters</Button>
    </div>

            <SearchResult
                img="https://static1.mansionglobal.com/production/media/article-images/ae4995fa7b11767a70af58edb374c380/large_Toll-Brothers-19-Marbella-Cassis-SC_Rear-Elevation_CC.jpg"
                Location="Privaate room in Toronto Canada"
                title="Stay in spacious room"
                description="hdj dksdks dskdkc cjdfj cdkckdc mkfmk dfjdkcodeocec cdkcmdkcmkdcmkd cekmek"
                star={4.5}
                price="$300/night"
                total="$600 total"
            />
            <SearchResult
                img="https://static1.mansionglobal.com/production/media/article-images/ae4995fa7b11767a70af58edb374c380/large_Toll-Brothers-19-Marbella-Cassis-SC_Rear-Elevation_CC.jpg"
                Location="Privaate room in Toronto Canada"
                title="Stay in spacious room"
                description="hdj dksdks dskdkc cjdfj cdkckdc mkfmk dfjdkcodeocec cdkcmdkcmkdcmkd cekmek"
                star={4.5}
                price="$300/night"
                total="$600 total"
            />
            <SearchResult
                img="https://static1.mansionglobal.com/production/media/article-images/ae4995fa7b11767a70af58edb374c380/large_Toll-Brothers-19-Marbella-Cassis-SC_Rear-Elevation_CC.jpg"
                Location="Privaate room in Toronto Canada"
                title="Stay in spacious room"
                description="hdj dksdks dskdkc cjdfj cdkckdc mkfmk dfjdkcodeocec cdkcmdkcmkdcmkd cekmek"
                star={4.5}
                price="$300/night"
                total="$600 total"
            />
            <SearchResult
                img="https://static1.mansionglobal.com/production/media/article-images/ae4995fa7b11767a70af58edb374c380/large_Toll-Brothers-19-Marbella-Cassis-SC_Rear-Elevation_CC.jpg"
                Location="Privaate room in Toronto Canada"
                title="Stay in spacious room"
                description="hdj dksdks dskdkc cjdfj cdkckdc mkfmk dfjdkcodeocec cdkcmdkcmkdcmkd cekmek"
                star={4.5}
                price="$300/night"
                total="$600 total"
            />
        </div>
       
  )
}

export default SearchPage