import { useState,useEffect } from 'react'
import { SiMonster } from 'react-icons/si'
import { IconContext } from "react-icons"
import socialMedia from '../assets/socialMedia.mp4'
import { gapi } from 'gapi-script'
import { GoogleLogin,GoogleLogout } from "react-google-login"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const Login = () => {
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID
    // const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
    // const navigate = useNavigate();
    
      const onSuccess = async (response) =>{
          const { name, email, imageUrl } =  response.profileObj;
          const doc =  { name: name, email: email, imageUrl: imageUrl };
          localStorage.setItem('user', JSON.stringify(doc));
          const res = await axios.get(`http://localhost:1337/api/mymeme-users?filters[email][$eq]=${email}`)
          const data = await res.data;
          (data.data.length === 0) &&
          axios.post('http://localhost:1337/api/mymeme-users', { data: doc});
      }

    useEffect(()=>{
      function start(){
        gapi.client.init({
          clientId: clientId,
          scope: ""
        })
      }
      gapi.load('client:auth2',start);
    },[]);

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
            <div className='absolute flex flex-col py-44 items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
              <div className='py-4'>
                {/* Logo */}
                <IconContext.Provider value={{ color: "#3b82f6", size: "5rem" }}>
                    <SiMonster />
                </IconContext.Provider>
              </div>
              <div id='signInButton' >
                  {<GoogleLogin
                      clientId = {clientId}
                      buttonText="Sign in with Google"
                      onSuccess={onSuccess}
                      onFailure={(err)=>console.log(err)}
                      cookiePolicy={"single_host_origin"}
                      isSignedIn={true}
                  />}
              </div>
            </div>
        </div>
    </div>
  )
}

export default Login