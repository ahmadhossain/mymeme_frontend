import React from 'react'
import { SiMonster } from 'react-icons/si'
import { IconContext } from "react-icons"
import { useEffect } from 'react'
import socialMedia from '../assets/socialMedia.mp4'
import { gapi } from 'gapi-script'
import { GoogleLogin } from "react-google-login"

const Login = () => {
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID
    const onSuccess= (res) =>{
        console.log(res.profileObj);
    }
    const onFailure = (res) =>{
        console.log(res);
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
                <IconContext.Provider value={{ color: "#3b82f6", size: "5rem" }}>
                    <SiMonster />
                </IconContext.Provider>
              </div>
              <div id='signInButton' >
                  <GoogleLogin
                      clientId = {clientId}
                      buttonText="Sign in with Google"
                      onSuccess={onSuccess}
                      onFailure={onFailure}
                      cookiePolicy={"single_host_origin"}
                      isSignedIn={true}
                  />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Login