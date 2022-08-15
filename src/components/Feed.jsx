import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import Spinner from './Spinner'
const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [meme, setMeme] = useState(null);
  const url = "http://localhost:1337/api/memes?populate=%2A";
  useEffect(()=>{
    // setLoading(true);
    // axios.get()

  },[]);
  const getAllMeme = async () => {
    const res = await axios.get(url);
    const data = await res.data;
    setMeme(data);
    setLoading(false);
  }
  if(loading) return <Spinner />
  return (
    <div>
      
    </div>
  )
}

export default Feed