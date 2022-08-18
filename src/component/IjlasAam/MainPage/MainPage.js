import React from 'react'
import Body from './Body/Body'
import Footer from './Footer/Footer'
import './MainPage.css'
import NavBar from './NavBar/NavBar'


const MainPage = () => {
  return (
    <>
    
    <NavBar />
    <Body />
    <div className='footer'>
    <Footer />
    </div>
    
    </>
  )
}

export default MainPage