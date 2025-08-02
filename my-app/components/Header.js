import React from 'react'

const Header = () => {
  return (
    <div>
        <header className='flex flex-row justify-between pt-5 absolute bg-gray-400 w-full'>
      <div className="p-1 ">
        <div className="border-black">ADE <span className='bg-gray-50 text-white'>BOSS</span></div>
      </div>
      <ul className="flex flex-row justify-evenly pr-5 pt-1 ">
        <li className='text-blue pl-2.5 list-none '><a href="#home"> HOME</a></li>
        <li className=' pl-2.5 list-none '><a href="#about">ABOUT</a></li>
        <li className=' pl-2.5 list-none '><a href="#skills">SKILLS</a></li>
        <li className=' pl-2.5 list-none '><a href="#projects">PROJECTS</a></li>
        <li className=' pl-2.5 list-none '><a href="#contact">CONTACT</a></li>
      </ul>
      <label className="clicked" for="menu-bar" onclick="clicked()" >
        <i className="fa-sharp fa-solid fa-bars" id="menu"></i>
    </label>  
      {/* <input type="checkbox"  id="menu-bar"> */}
      <label className="Offclicked hidden" for="menu-bar" onclick="Offclicked()" >
        <i className="fa-sharp fa-solid fa-youtube" id="menu"></i>
    </label>  
    </header>
    </div>
  )
}

export default Header
