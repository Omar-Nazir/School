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
    <div>
      <nav class='bg-[#00afb5] h-[60px] w-[100%]  border-[0.1px] border-black border-opacity-10   size-20  text-2xl text-white relative z-10  flex items-center place-content-between'  >
        <div class=' flex px-[5%]'>

          <a class='mx-2 cursor-pointer' ><FontAwesomeIcon icon={faGraduationCap} /></a>
          <a class='mx-2 cursor-pointer' onClick={() => setClicked(!clicked)} ><FontAwesomeIcon icon={faBars} /></a>
          <a class='mx-2 cursor-pointer hidden '><FontAwesomeIcon icon={faInbox} /></a>
          <a class='mx-2 cursor-pointer'><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
          <a class='mx-2 cursor-pointer'><FontAwesomeIcon icon={faGear} /></a>
        </div>
        <div class='px-8 cursor-pointer'>
          <a> <FontAwesomeIcon icon={faPowerOff} /></a>
        </div>


      </nav>
      {clicked?
      <Sidebar />:null
    }
    </div>

  )
}
export default Nav;