import React from 'react'
import { BiSolidErrorAlt } from "react-icons/bi";

const Icons = ({size , color, nameIcon }) => {
  return (
    <div className='absolute top-1/4 animate-pulse opacity-10  ' transition={{ repeat: Infinity, duration: 6}} >
{nameIcon === `error` ?  <BiSolidErrorAlt size={size} color={color} /> : null }
    </div>
  )
}

export default Icons
