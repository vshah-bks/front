import React from 'react'
import img1 from '../media/img1.jpg'
import '../App.css'

const Home = () => {
  return (
    <div>
        <img className='home-img' src={img1} alt="" />
        <h5 className='home-text'>
            We are Here to <h4>Save You!!</h4>
        </h5>
    </div>
  )
}

export default Home