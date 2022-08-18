import React from 'react'
import './AddNavLink.css'
import { useState } from 'react'


const AddNavLink = (props) => {
  const [linkForm, setlinkForm] = useState({icon:"",link:""})
  
  const submitForm=(e)=>{
    
    alert(`${linkForm.icon} ${linkForm.link}`)
  }
  const handleOnChange=(e)=>{
    const {name,value}=e.target
    setlinkForm(prev=>{
      return {...prev,[name]:value}
    })
  }
  return (
    <div className='alert'>
    <div className='container'>
      
      <div>
        <h1 className='title'>Add Nav Bar Link</h1>
      </div>
      <div className='close-button'><button onClick={props.close}>X</button></div>
    </div>
    <div>
      <form className='form' onSubmit={submitForm}>
        <div className='input'>
          <input
          name="icon"
          value={linkForm.icon}
          placeholder='Add Name'
          onChange={handleOnChange}

          />
        </div>
        <div className='input'>
          <input 
          name="link"
          value={linkForm.link}
          placeholder='Add Link'
          onChange={handleOnChange}

          />
        </div>
        <button className='submit-button'>Submit</button>
      </form>
    </div>
    </div>
    


   
  )
}

export default AddNavLink