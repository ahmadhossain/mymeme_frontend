import { RiMenu5Fill } from "react-icons/ri";
import { useState, useEffect, useRef } from "react";
import { SiMonster } from "react-icons/si";
import { AiOutlineClose } from "react-icons/ai";
import { GoogleLogout } from "react-google-login";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";

import { Sidebar, Login, UserProfile } from "../components";
import Posts from "./Posts";

const Home = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [user, setUser] = useState(null);
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    const res = await axios.get(
      `http://localhost:1337/api/mymeme-users?filters[email][$eq]=${userInfo.email}`
    );
    const data = await res.data;
    console.log(data.data[0].attributes);
    // console.log(userInfo);
    setUser(data.data[0].attributes);
    user && console.log(user);
  };

  return (
    <div
      className="flex bg-slate-700 md:flex-row flex-col h-screen transition-height duration-75 ease-out"
      onClick={() => toggleSidebar && setToggleSidebar(false)}
    >
      {/* Medium device sidebar */}
      <div className="hidden md:flex h-screen flex-initial">
        <Sidebar />
      </div>
      {/* Small device sidebar */}
      <div className="flex md:hidden flex-row">
        <div className="p-3 w-full flex flex-row justify-between items-start bg-gray-800 shadow-md">
          {/* Menu icon */}
          <RiMenu5Fill
            size="3rem"
            color="#3b82f6"
            onClick={() => setToggleSidebar(true)}
          />

          {/* Logo */}
          <Link to="/">
            <SiMonster
              className="mx-5 cursor-pointer"
              color="#3b82f6"
              size="3.25rem"
            />
          </Link>
          <img src={user && user.imageUrl} className="rounded-full w-12 h-12" />
        </div>
        {toggleSidebar && (
          <div className="fixed w-4/5 bg-white h-screen shadow-md z-10 animate-slide-in">
            <div className="absolute w-full flex justify-end items-center p-2">
              <AiOutlineClose
                size="2rem"
                color="#3b82f6"
                onClick={() => setToggleSidebar(false)}
              />
            </div>
            <Sidebar user={user && user} closeToggle={setToggleSidebar} />
          </div>
        )}
      </div>
      <div className="pb-2 flex-2 w-full h-screen">
        <Routes>
          <Route path="/user-profile/:userId" element={<UserProfile />} />
          <Route path="/*" element={<Posts user={user && user} />} />
        </Routes>
      </div>
      {/* <GoogleLogout
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Sign out"
        onLogoutSuccess={() => {
          navigate("/login", { replace: true });
        }}
      /> */}
    </div>
  );
};

export default Home;
