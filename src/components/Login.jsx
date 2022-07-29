import { useState,useEffect } from 'react'
import { SiMonster } from 'react-icons/si'
import { IconContext } from "react-icons"
import socialMedia from '../assets/socialMedia.mp4'
import { gapi } from 'gapi-script'
import { GoogleLogin,GoogleLogout } from "react-google-login"
import axios from 'axios'

const Login = () => {
    const [user,setUser] = useState(null);
    const [data,setData] = useState(null);
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID
 
    useEffect(()=>{
      data && data.length === 0 && axios.post('http://localhost:1337/api/mymeme-users', { data: user});
    },[user]);
    const onSuccess= (response) =>{
        const { name, email, imageUrl } = response.profileObj;
        setUser({name: name, email: email, imageUrl: imageUrl});
        axios.get(`http://localhost:1337/api/mymeme-users?filters[email][$eq]=${email}`)
             .then( res =>  setData(res.data.data));
    }
   
    const onFailure = (res) =>{
        console.log(res);
    }
    const onLogout = (res) =>{
      setUser(null);
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
                  {!user ? <GoogleLogin
                      clientId = {clientId}
                      buttonText="Sign in with Google"
                      onSuccess={onSuccess}
                      onFailure={onFailure}
                      cookiePolicy={"single_host_origin"}
                      isSignedIn={true}
                  />:
                  <GoogleLogout
                      clientId={clientId}
                      buttonText="Sign out"
                      onLogoutSuccess={onLogout}
                  />
                  }
              </div>
            </div>
        </div>
    </div>
  )
}

export default Login