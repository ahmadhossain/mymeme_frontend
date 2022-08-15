import React from "react";
import { Route, Routes } from "react-router-dom";
import CreatePost from "./CreatePost";
import Feed from "./Feed";
import Navbar from "./Navbar";

const Posts = ({ user }) => {
  return (
    <div className="px-16">
      <div className="">
        <Navbar user={user && user} />
      </div>
      <div className="h-full">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/create-pin" element={<CreatePost user={user} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Posts;
