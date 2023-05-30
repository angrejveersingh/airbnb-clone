import React from 'react'
import './Home.css'
import Banner from '../../Components/Banner/Banner'
import Card from '../../Components/Card/Card'


function Home() {
  return (
    <div className='home'>
     
      <Banner/>

      <div className='home_section'>
        <Card 
        src="https://static1.mansionglobal.com/production/media/article-images/ae4995fa7b11767a70af58edb374c380/large_Toll-Brothers-19-Marbella-Cassis-SC_Rear-Elevation_CC.jpg"
        title="Online Experiences"
        description="Unique activities we can do together, led by a world of hosts."/>
        <Card
        src="https://static1.mansionglobal.com/production/media/article-images/ae4995fa7b11767a70af58edb374c380/large_Toll-Brothers-19-Marbella-Cassis-SC_Rear-Elevation_CC.jpg"
        title="Unique Stays"
        description="Spaces that are more than just a place to sleep."/>
      
        <Card
        src="https://static1.mansionglobal.com/production/media/article-images/ae4995fa7b11767a70af58edb374c380/large_Toll-Brothers-19-Marbella-Cassis-SC_Rear-Elevation_CC.jpg"
        title="Entire Homes"
        description="Spaces that are more than just a place to sleep."/>
      </div>
      <div className='home_section'>
      <Card 
        src="https://static1.mansionglobal.com/production/media/article-images/ae4995fa7b11767a70af58edb374c380/large_Toll-Brothers-19-Marbella-Cassis-SC_Rear-Elevation_CC.jpg"
        title="Online Experiences"
        description="Unique activities we can do together, led by a world of hosts."
        price="$200/night"/>
        <Card
        src="https://static1.mansionglobal.com/production/media/article-images/ae4995fa7b11767a70af58edb374c380/large_Toll-Brothers-19-Marbella-Cassis-SC_Rear-Elevation_CC.jpg"
        title="Unique Stays"
        description="Spaces that are more than just a place to sleep."
        price="$200/night"/>
      
        <Card
        src="https://static1.mansionglobal.com/production/media/article-images/ae4995fa7b11767a70af58edb374c380/large_Toll-Brothers-19-Marbella-Cassis-SC_Rear-Elevation_CC.jpg"
        title="Entire Homes"
        description="Spaces that are more than just a place to sleep."
        price="$200/night"/>
      </div>
    </div>
  )
}

export default Home