import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
import 'animate.css';

export default function NavBar() {
    const [open, setOpen] = useState(false);

    const navLink =
        <>
            <li>
                <NavLink to={'/'} className='hover:text-[#5271FF] text-xl transition   duration-300 ease-in-out '>Home</NavLink>
            </li>
            <li>
                <NavLink to={'/about'} className='hover:text-[#5271FF] text-xl transition   duration-300 ease-in-out'>About</NavLink>
            </li>
            <li>
                <NavLink to={'/skill'} className='hover:text-[#5271FF] text-xl transition   duration-300 ease-in-out'>Skill</NavLink>
            </li>
            <li>
                <NavLink to={'/project'} className='hover:text-[#5271FF] text-xl transition   duration-300 ease-in-out'>Project</NavLink>
            </li>
            <li>
                <NavLink to={'/contact'} className='hover:text-[#5271FF] text-xl transition   duration-300 ease-in-out '>Contact</NavLink>
            </li>
        </>


    return (
        <div className="lg:w-full lg:bg-[#272730] md:bg-[#272730] ">

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex justify-between items-center p-7 bg-[#272730] ">
                <div className="text-white font-bold text-2xl">Profile</div>
                <div onClick={() => setOpen(!open)} className="text-white">
                    {open ? <MdClose className="text-3xl" /> : <IoMenu className="text-3xl" />}
                </div>
            </div>

            {/* Nav Links */}
            <div className="md:flex justify-between items-center container mx-auto  lg:p-6 md:p-4">
                <div className="hidden md:block text-white text-2xl font-bold">Profile</div>

                <ul className={`md:flex md:space-x-8 text-white font-medium transition-all duration-1000 ease-in-out text-center  ${open ? 'top-24' : '-top-96'} md:block bg-[#5271FF]  md:bg-transparent absolute md:static  md:top-auto left-0  w-full md:w-auto p-6 md:p-0  md:z-auto rounded-md md:rounded-none z-50 `}>
                    {navLink}
                </ul>
            </div>
        </div>
    );
}
