import React from 'react'
import { Triangle } from 'react-loader-spinner'

const Spinner = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
        <Triangle
            heitht = "80"
            width = "80"
            color='#22d3ee'
        />
    </div>
  )
}

export default Spinner