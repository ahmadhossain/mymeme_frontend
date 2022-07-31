import React from 'react'
import { CgMenuLeft } from 'react-icons/cg'
import { useState } from 'react'
import { SiMonster } from 'react-icons/si'
import { IconContext } from "react-icons"
import { GoogleLogout } from "react-google-login"
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const navigate = useNavigate();

  return (
    <div className='flex bg-gray-100 md:flex-row flex-col h-screen transition-height duration-75 ease-out'>
      
        {/* Medium device sidebab */}
        <div className='hidden md:flex h-screen flex-initial'>
              Sidebar
        </div>
        <div className='flex md:hidden flex-row '>
              <CgMenuLeft fontSize={40} className="cursor-pointer" onClick={()=> setToggleSidebar(false)} />
              <IconContext.Provider value={{ color: "#3b82f6", size: "3.75rem" }}>
                  <SiMonster />
              </IconContext.Provider>
        </div>
        <GoogleLogout
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Sign out"
            onLogoutSuccess={()=>{ localStorage.clear(); navigate('/login')}}

        />
    </div>
  )
}

export default Home