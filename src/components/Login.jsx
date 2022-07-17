import React from 'react'
import { SiMonster } from 'react-icons/si'
import { IconContext } from "react-icons";
import { useState } from 'react';
import { useEffect } from 'react';


const Login = () => {
useEffect(()=>{
    let i = 0;
    setInterval(() => {
        setColor(colors[++i%colors.length]);
    }, 700);
},[]);
const [color,setColor]= useState("#60a5fa");
const colors = ["#3b82f6","#2563eb","#1d4ed8"];

  return (
    <div>
        <IconContext.Provider value={{ color: color, size: "5rem" }}>
            <SiMonster className="mr-4" />
        </IconContext.Provider>
    </div>
  )
}

export default Login