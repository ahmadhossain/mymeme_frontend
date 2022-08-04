import React from 'react'

const Navbar = ({ user }) => {
  if(!user) return null;
  return (
    <div className='hidden md:flex justify-end mt-5 pb-7'>
      <div className='flex'>
        <img src={user.imageUrl} alt='user' className='w-14 h-12 rounded-lg' />
      </div>
    </div>
  )
}

export default Navbar