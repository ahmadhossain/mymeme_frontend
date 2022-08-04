import { SiMonster } from 'react-icons/si'
import { VscHome } from 'react-icons/vsc'
import { IconContext } from "react-icons"
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  const isActiveStyle = 'flex items-center px-5 gap-3 text-lg font-semibold text-cyan-400 border-r-4 border-cyan-400 transition-all duration ease-in-out capitalize'
  const isNotActiveStyle = 'flex items-center px-5 gap-3 text-lg text-gray-300 hover:text-cyan-600 transition-all duration ease-in-out capitalize'
  return (
    <div className='flex flex-col justify-start bg-gray-800 h-full w-50 md:w-60'>
      <Link
        to="/"
        className='flex px-5 gap-2 my-6 pt-1 w-190 items-center'
      >
        <IconContext.Provider value={{ color: "#3b82f6", size: "3.75rem" }}>
            <SiMonster className='mx-5 cursor-pointer' />
        </IconContext.Provider>
      </Link>
      <div className='flex flex-col gap-5'>
        <NavLink
          to = "/"
          className={({ isActive }) => isActive ? isActiveStyle: isNotActiveStyle}
        >
          <VscHome fontSize={30} />
          Home
        </NavLink>
        <NavLink
          to = "/user-profile"
          className={({ isActive }) => isActive ? isActiveStyle: isNotActiveStyle}
        >
          profile
        </NavLink>

      </div>
    </div>
  )
}

export default Sidebar