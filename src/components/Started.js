import React from 'react'
import { useNavigate } from 'react-router'

const Started = () => {

  const navigate = useNavigate()
  return (
    <div className='started'>
            <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
            <div className="email">
            <input type="text" placeholder='Email Address' />
            <button onClick={()=>{navigate('/signin')}}>Get Started</button>
            </div>
    </div>
  )
}

export default Started
