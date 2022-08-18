import React from 'react'
import './Body.css'
import Left from './LeftBody/Left'
import Middle from './MiddleBody/Middle'
import Right from './RightBody/Right'

const Body = () => {
  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='left'>
                <Left />
            </div>
            <div className='mid'>
                <Middle />
            </div>
            <div className='right'>
                <Right />
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Body