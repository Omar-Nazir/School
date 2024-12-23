import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faHotel, faCreditCard, faGauge, faChalkboardUser, faUser } from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  const [appear, setAppear] = React.useState(true)
  const [oappear, setOappear] = React.useState(false)
  return (
    <div class='bg-[#00afb5]   w-[55%]  lg:w-[30%]  h-[100%]  z-10  absolute  md:top-0   md:pl-20 '>
      <h2 className="text-2xl font-semibold p-4 select-none text-white  opacity-90">Sidebar</h2>
      <div className="flex border-b-[1px] border-opacity-20  text-white   
         ">
        <button class='w-32 h-20  cursor-pointer  select-none hover:opacity-90 opacity-40 hover:border-b-[1px] focus:border-b-[1px] focus:opacity-95  border-white ' onClick={() => setAppear(true)} > < a class='w-32 h-20 flex justify-center items-center ' onClick={() => setOappear(false)}> <h4 class=' '>University</h4></a> </button>
        <button class='cursor-pointer w-32 h-20  select-none  hover:opacity-90 opacity-40 hover:border-b-[1px] border-white focus:border-b-[1px] focus:opacity-95 ' onClick={() => setOappear(true)}><a class=' w-32 h-20 flex justify-center items-center' onClick={() => setAppear(false)}><h4>Admin</h4></a> </button>
      </div>
      
      {appear ?
        <block class='flex flex-col  w-[100%] top-[25%] p-5  opacity-90 select-none h-[75%] overflow-auto no-scrollbar'>
          <a class='text-white   cursor-pointer pb-3 '><FontAwesomeIcon icon={faGauge} /><span class='px-3'>Dashbord</span></a>
          <a class='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faChalkboardUser} /><span class='px-3'>Professors</span> </a>
          <a class='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faUser} /><span class='px-3'>Staff </span></a>
          <a class='text-white   cursor-pointer pb-3 '><FontAwesomeIcon icon={faGauge} /><span class='px-3'>Dashbord</span></a>
          <a class='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faChalkboardUser} /><span class='px-3'>Professors</span> </a>
          <a class='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faUser} /><span class='px-3'>Staff </span></a>
          <a class='text-white   cursor-pointer pb-3 '><FontAwesomeIcon icon={faGauge} /><span class='px-3'>Dashbord</span></a>
          <a class='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faChalkboardUser} /><span class='px-3'>Professors</span> </a>
          <a class='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faUser} /><span class='px-3'>Staff </span></a>
          <a class='text-white   cursor-pointer pb-3 '><FontAwesomeIcon icon={faGauge} /><span class='px-3'>Dashbord</span></a>
          <a class='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faChalkboardUser} /><span class='px-3'>Professors</span> </a>
          <a class='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faUser} /><span class='px-3'>Staff </span></a>
          <a class='text-white   cursor-pointer pb-3 '><FontAwesomeIcon icon={faGauge} /><span class='px-3'>Dashbord</span></a>
          <a class='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faChalkboardUser} /><span class='px-3'>Professors</span> </a>
          <a class='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faUser} /><span class='px-3'>Staff </span></a>
          <a class='text-white   cursor-pointer pb-3 '><FontAwesomeIcon icon={faGauge} /><span class='px-3'>Dashbord</span></a>
          <a class='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faChalkboardUser} /><span class='px-3'>Professors</span> </a>
          <a class='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faUser} /><span class='px-3'>Staff </span></a>
          <a class='text-white   cursor-pointer pb-3 '><FontAwesomeIcon icon={faGauge} /><span class='px-3'>Dashbord</span></a>
          <a class='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faChalkboardUser} /><span class='px-3'>Professors</span> </a>
          <a class='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faUser} /><span class='px-3'>Staff </span></a>
        </block> : null
      }
      {oappear ?
        <div class='flex flex-col  w-[100%] top-[25%] p-5  opacity-90 select-none h-[75%] overflow-auto no-scrollbar'>
          <a class='text-white   cursor-pointer pb-3'><FontAwesomeIcon icon={faCreditCard} /> <span class='px-3'>Payments</span></a>
          <a class='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faHotel} /><span class='px-3'>Hostel</span> </a>
          <a class='text-white  cursor-pointer pb-3' ><FontAwesomeIcon icon={faGear} /><span class='px-3'>Setting</span> </a>
          <a class='text-white   cursor-pointer pb-3'><FontAwesomeIcon icon={faCreditCard} /> <span class='px-3'>Payments</span></a>
          <a class='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faHotel} /><span class='px-3'>Hostel</span> </a>
          <a class='text-white  cursor-pointer pb-3' ><FontAwesomeIcon icon={faGear} /><span class='px-3'>Setting</span> </a>
          <a class='text-white   cursor-pointer pb-3'><FontAwesomeIcon icon={faCreditCard} /> <span class='px-3'>Payments</span></a>
          <a class='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faHotel} /><span class='px-3'>Hostel</span> </a>
          <a class='text-white  cursor-pointer pb-3' ><FontAwesomeIcon icon={faGear} /><span class='px-3'>Setting</span> </a>
          <a class='text-white   cursor-pointer pb-3'><FontAwesomeIcon icon={faCreditCard} /> <span class='px-3'>Payments</span></a>
          <a class='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faHotel} /><span class='px-3'>Hostel</span> </a>
          <a class='text-white  cursor-pointer pb-3' ><FontAwesomeIcon icon={faGear} /><span class='px-3'>Setting</span> </a>
          <a class='text-white   cursor-pointer pb-3'><FontAwesomeIcon icon={faCreditCard} /> <span class='px-3'>Payments</span></a>
          <a class='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faHotel} /><span class='px-3'>Hostel</span> </a>
          <a class='text-white  cursor-pointer pb-3' ><FontAwesomeIcon icon={faGear} /><span class='px-3'>Setting</span> </a>
          <a class='text-white   cursor-pointer pb-3'><FontAwesomeIcon icon={faCreditCard} /> <span class='px-3'>Payments</span></a>
          <a class='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faHotel} /><span class='px-3'>Hostel</span> </a>
          <a class='text-white  cursor-pointer pb-3' ><FontAwesomeIcon icon={faGear} /><span class='px-3'>Setting</span> </a>
          <a class='text-white   cursor-pointer pb-3'><FontAwesomeIcon icon={faCreditCard} /> <span class='px-3'>Payments</span></a>
          <a class='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faHotel} /><span class='px-3'>Hostel</span> </a>
          <a class='text-white  cursor-pointer pb-3' ><FontAwesomeIcon icon={faGear} /><span class='px-3'>Setting</span> </a>
          <a class='text-white   cursor-pointer pb-3'><FontAwesomeIcon icon={faCreditCard} /> <span class='px-3'>Payments</span></a>
          <a class='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faHotel} /><span class='px-3'>Hostel</span> </a>
          <a class='text-white  cursor-pointer pb-3' ><FontAwesomeIcon icon={faGear} /><span class='px-3'>Setting</span> </a>
        </div>: null 
        
      }
     

      {/* <ul>
          <li>hello pk</li>
          <li>bye pk</li>
          <li>bye pk</li>
        </ul> */}
    </div>
    //   <div
    //   class={`fixed top-0 left-0 h-full bg-blue-800 text-white p-4 transition-transform duration-300 ${
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
  )
}
export default Sidebar;