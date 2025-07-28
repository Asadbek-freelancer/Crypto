import React from 'react'
import BackgroundEffect from '../components/BackgroundEffect'
import Background from '../components/Background'
import { BiSolidErrorAlt } from "react-icons/bi";
import Icons from '../components/Icons';

const NotFound = () => {
  return (
      <div className=' flex flex-col justify-center items-center'>
        <h1 className='absolute text-4xl text-center font-bold  text-pink-600 z-50'>404 - Not Found</h1>
       <Icons  nameIcon={`error`} size={100} color={`rgb(216, 27, 96)`} />
  <Background />
    </div>
  )
}

export default NotFound