import { RiMenu5Fill } from 'react-icons/ri'
import { useState,useEffect } from 'react'
import { SiMonster } from 'react-icons/si'
import { IconContext } from "react-icons"
import { AiOutlineClose } from "react-icons/ai"

import { GoogleLogout } from "react-google-login"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Sidebar from '../components/Sidebar'

const Home = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [user, setUser] = useState(null);
  const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
  const navigate = useNavigate();

  useEffect( async ()=>{
    const res = await axios.get(`http://localhost:1337/api/mymeme-users?filters[email][$eq]=${userInfo.email}`);
    const data = await res.data;
    console.log(data.data[0].attributes);
    setUser(data.data[0].attributes);
    // console.log(userInfo);
  }, [])

  return (
    <div className='flex bg-gray-100 md:flex-row flex-col h-screen transition-height duration-75 ease-out'>
        {/* Medium device sidebar */}
        <div className='hidden md:flex h-screen flex-initial'>
            <Sidebar />
        </div>
        <div className='flex md:hidden flex-row '>
              {/* Menu icon */}
              <RiMenu5Fill fontSize={40} className="cursor-pointer" onClick={()=> setToggleSidebar(true)} />
              {/* Logo */}
              <Link to="/" >
                <IconContext.Provider value={{ color: "#3b82f6", size: "3.75rem" }}>
                    <SiMonster className='mx-5 cursor-pointer' />
                </IconContext.Provider>
              </Link>
              <img src = {user && user.imageUrl} className='rounded-full w-14 h-14' />
        </div>
        { toggleSidebar && (
          <div className='fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in'>
            <div className='absolute w-full flex justify-end items-center p-2'>
              <AiOutlineClose fontSize={30} onClick={()=> setToggleSidebar(false)} />
            </div>
            <Sidebar  />
          </div>
        )}
        <GoogleLogout
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Sign out"
            onLogoutSuccess={()=>{ localStorage.clear(); navigate('/login')}}
        />
    </div>
  )
}

export default Home