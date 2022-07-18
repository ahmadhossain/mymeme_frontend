import React from 'react'
import { SiMonster } from 'react-icons/si'
import { IconContext } from "react-icons";
import { useState } from 'react';
import { useEffect } from 'react';
import socialMedia from '../assets/socialMedia.mp4';

const Login = () => {

  return (
    <div className='flex justify-center items-center flex-col h-screen'>
        <div className='relative w-full flex justify-center bg-light-black'>
            <video className='h-screen'
                src={socialMedia}
                type="video/mp4"
                loop
                controls={false}
                muted
                autoPlay
            />
            <div className='absolute flex justify-center pt-28 top-0 right-0 left-0 bottom-0 bg-black opacity-50'>
              <IconContext.Provider value={{ color: "#1d4ed8", size: "5rem" }}>
                  <SiMonster className="mr-4" />
              </IconContext.Provider>
            </div>
        </div>
      
    </div>
  )
}

export default Login