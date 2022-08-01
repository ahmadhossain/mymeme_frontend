import { SiMonster } from 'react-icons/si'
import { IconContext } from "react-icons"
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='flex flex-col justify-between bg-white h-full overflow-y-scroll w-50 md:w-60 hide-scrollbar'>
      <Link
        to="/"
        className='flex px-5 gap-2 my-6 pt-1 w-190 items-center'
      >
        <IconContext.Provider value={{ color: "#3b82f6", size: "3.75rem" }}>
            <SiMonster className='mx-5 cursor-pointer' />
        </IconContext.Provider>
      </Link>
    </div>
  )
}

export default Sidebar