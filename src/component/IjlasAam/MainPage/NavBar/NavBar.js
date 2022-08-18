import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='Container'>
        <div>
            <h3 className='region'>GTA East</h3>
        </div>
        <div><h4 className='title'>Ijlas Aam Dates</h4></div>
        <div>
            <ul>
                <li>Previous Dates</li>
                <li>Aurangzeb</li>
                <li>logout</li>
            </ul>
        </div>
        
    </div>
  )
}

export default NavBar