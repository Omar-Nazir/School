import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./sidebar";
import React from "react";

const Nav = () => {
  const [clicked, setClicked] = React.useState(false)
  return (
    <div class='md:w-20 md:h-[100%]  md:bg-[#00afb5]  z-20 '>
      <nav class=' h-[60px] md:h-[100%] w-[100%] bg-[#00afb5] border-[0.1px] border-black border-opacity-10   size-20  text-2xl text-white relative   flex  items-center place-content-between  md:flex-col  z-20'  >
        <div class=' flex md:flex-col px-[5%]'>

          <a class='mx-2 cursor-pointer md:pb-6 md:pt-6 ' ><FontAwesomeIcon icon={faGraduationCap} /></a>
          <a class='mx-2 cursor-pointer md:pb-6' onClick={() => setClicked(!clicked)} ><FontAwesomeIcon icon={faBars} /></a>
          <a class='mx-2 cursor-pointer hidden md:pb-6'><FontAwesomeIcon icon={faInbox} /></a>
          <a class='mx-2 cursor-pointer md:pb-6'><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
          <a class='mx-2 cursor-pointer md:pb-6'><FontAwesomeIcon icon={faGear} /></a>
        </div>
        <div class='px-8 cursor-pointer md:mb-8'>
          <a> <FontAwesomeIcon icon={faPowerOff} /></a>
        </div>
      </nav>
      {clicked?
      <Sidebar />
    //   <div
    //   class={`fixed top-0 left-0 h-full bg-blue-800 text-white p-4 transition-transform duration-1000 ${
    //     clicked ? 'translate-x-0' : '-translate-x-full'
    //   }`}
    //   style={{ width: '16rem' }}
    // >
    //   <h2 class="text-2xl font-semibold mb-4">Sidebar</h2>
    //   <ul>
    //     <li class="mb-2"><a href="#dashboard" class="hover:underline">Dashboard</a></li>
    //     <li class="mb-2"><a href="#settings" class="hover:underline">Settings</a></li>
    //     <li><a href="#profile" class="hover:underline">Profile</a></li>
    //   </ul>
    // </div>
      :null
    }
    </div>

  )
}
export default Nav;