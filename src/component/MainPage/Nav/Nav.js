import React from 'react'
import './Nav.css'
import navData from './navData'
import { useState} from 'react';
import AddNavLink from './AddNavLink/AddNavLink'

const Nav = () => {
  const [navBar, setnavBar] = useState(navData);
const [addNavLink, setaddNavLink] = useState(false)
  const icons=navBar.icons.map((icon)=>icon.icon)
 const AddNavLinkCardOn=()=>{
  setaddNavLink(true)
 }
 const AddNavLinkCardOff=()=>{
  setaddNavLink(false)
 }
  return (
    <>
    <div className='navbar'>

<div className='named'>
  <div className='aur'>
  <h1>{navBar.name}</h1>
  </div>
  

</div>
<div className='iconic'>
  <h1>:</h1>
  <div className='dropdown-content'>
    
  <ul>
    {navBar.icons.map((icons)=><li key={icons.id}>{icons.icon}</li>)}
    
    
    <button
    onClick={AddNavLinkCardOn}
    className='add-more'>+ Add more</button>
  </ul>
  </div>
  </div>
<div className='nav-icons'>
<ul className='list-icon'>

    {navBar.icons.map((icons)=><li key={icons.id}>
      {icons.icon}
      <div className='this-badge'>
      <small>--</small>
      </div>
      
      </li>)}
    
    <button
    onClick={AddNavLinkCardOn}
    className='add-more'>+ Add more</button>
  
  </ul>
</div>



    </div>
    {addNavLink && <AddNavLink close={AddNavLinkCardOff}/>}
    </>
  )
}

export default Nav