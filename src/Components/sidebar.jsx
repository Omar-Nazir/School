import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faHotel, faCreditCard, faGauge, faChalkboardUser, faUser } from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  const [appear, setAppear] = React.useState(true)
  const [oappear, setOappear] = React.useState(false)
  return (
    <div className='bg-[#00afb5]   w-[45%]  lg:w-[20%]  h-[100%]  z-10  absolute  md:top-0   md:pl-20 '>
      <h2 className="text-2xl font-semibold p-4 select-none text-white  opacity-90">Sidebar</h2>
      <div className="flex border-b-[1px] border-opacity-20  text-white   
         ">
        <button className='w-32 h-20  cursor-pointer  select-none  hover:opacity-90 opacity-40 hover:border-b-[1px] focus:border-b-[1px] focus:opacity-95  border-white ' onClick={() => setAppear(true, setOappear(false))} > < a className='w-32 h-20 flex justify-center items-center '> University</a> </button>
        <button className='cursor-pointer w-32 h-20  select-none  hover:opacity-90 opacity-40 hover:border-b-[1px] border-white focus:border-b-[1px] focus:opacity-95 ' onClick={() => setOappear(true, setAppear(false))}><a className=' w-32 h-20 flex justify-center items-center'>Admin</a> </button>
      </div>
      
      {appear ?
        <div className='flex flex-col  w-[100%] top-[25%] p-5  opacity-90 select-none h-[85%] overflow-auto no-scrollbar'>
          <a className='text-white   cursor-pointer pb-3 '><FontAwesomeIcon icon={faGauge} /><span className='px-3'>Dashbord</span></a>
          <a className='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faChalkboardUser} /><span className='px-3'>Professors</span> </a>
          <a className='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faUser} /><span className='px-3'>Staff </span></a>
          <a className='text-white   cursor-pointer pb-3 '><FontAwesomeIcon icon={faGauge} /><span className='px-3'>Dashbord</span></a>
          <a className='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faChalkboardUser} /><span className='px-3'>Professors</span> </a>
          <a className='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faUser} /><span className='px-3'>Staff </span></a>
          <a className='text-white   cursor-pointer pb-3 '><FontAwesomeIcon icon={faGauge} /><span className='px-3'>Dashbord</span></a>
          <a className='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faChalkboardUser} /><span className='px-3'>Professors</span> </a>
          <a className='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faUser} /><span className='px-3'>Staff </span></a>
          <a className='text-white   cursor-pointer pb-3 '><FontAwesomeIcon icon={faGauge} /><span className='px-3'>Dashbord</span></a>
          <a className='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faChalkboardUser} /><span className='px-3'>Professors</span> </a>
          <a className='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faUser} /><span className='px-3'>Staff </span></a>
          <a className='text-white   cursor-pointer pb-3 '><FontAwesomeIcon icon={faGauge} /><span className='px-3'>Dashbord</span></a>
          <a className='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faChalkboardUser} /><span className='px-3'>Professors</span> </a>
          <a className='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faUser} /><span className='px-3'>Staff </span></a>
          <a className='text-white   cursor-pointer pb-3 '><FontAwesomeIcon icon={faGauge} /><span className='px-3'>Dashbord</span></a>
          <a className='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faChalkboardUser} /><span className='px-3'>Professors</span> </a>
          <a className='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faUser} /><span className='px-3'>Staff </span></a>
          <a className='text-white   cursor-pointer pb-3 '><FontAwesomeIcon icon={faGauge} /><span className='px-3'>Dashbord</span></a>
          <a className='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faChalkboardUser} /><span className='px-3'>Professors</span> </a>
          <a className='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faUser} /><span className='px-3'>Staff </span></a>
          <a className='text-white   cursor-pointer pb-3 '><FontAwesomeIcon icon={faGauge} /><span className='px-3'>Dashbord</span></a>
          <a className='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faChalkboardUser} /><span className='px-3'>Professors</span> </a>
          <a className='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faUser} /><span className='px-3'>Staff </span></a>
          <a className='text-white   cursor-pointer pb-3 '><FontAwesomeIcon icon={faGauge} /><span className='px-3'>Dashbord</span></a>
          <a className='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faChalkboardUser} /><span className='px-3'>Professors</span> </a>
          <a className='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faUser} /><span className='px-3'>Staff </span></a>
          <a className='text-white   cursor-pointer pb-3 '><FontAwesomeIcon icon={faGauge} /><span className='px-3'>Dashbord</span></a>
          <a className='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faChalkboardUser} /><span className='px-3'>Professors</span> </a>
          <a className='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faUser} /><span className='px-3'>Staff </span></a>
          <a className='text-white   cursor-pointer pb-3 '><FontAwesomeIcon icon={faGauge} /><span className='px-3'>Dashbord</span></a>
          <a className='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faChalkboardUser} /><span className='px-3'>Professors</span> </a>
          <a className='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faUser} /><span className='px-3'>Staff </span></a>
        </div> : null
      }
      {oappear ?
        <div className='flex flex-col  w-[100%] top-[25%] p-5  opacity-90 select-none h-[85%] overflow-auto no-scrollbar'>
          <a className='text-white   cursor-pointer pb-3'><FontAwesomeIcon icon={faCreditCard} /> <span className='px-3'>Payments</span></a>
          <a className='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faHotel} /><span className='px-3'>Hostel</span> </a>
          <a className='text-white  cursor-pointer pb-3' ><FontAwesomeIcon icon={faGear} /><span className='px-3'>Setting</span> </a>
          <a className='text-white   cursor-pointer pb-3'><FontAwesomeIcon icon={faCreditCard} /> <span className='px-3'>Payments</span></a>
          <a className='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faHotel} /><span className='px-3'>Hostel</span> </a>
          <a className='text-white  cursor-pointer pb-3' ><FontAwesomeIcon icon={faGear} /><span className='px-3'>Setting</span> </a>
          <a className='text-white   cursor-pointer pb-3'><FontAwesomeIcon icon={faCreditCard} /> <span className='px-3'>Payments</span></a>
          <a className='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faHotel} /><span className='px-3'>Hostel</span> </a>
          <a className='text-white  cursor-pointer pb-3' ><FontAwesomeIcon icon={faGear} /><span className='px-3'>Setting</span> </a>
          <a className='text-white   cursor-pointer pb-3'><FontAwesomeIcon icon={faCreditCard} /> <span className='px-3'>Payments</span></a>
          <a className='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faHotel} /><span className='px-3'>Hostel</span> </a>
          <a className='text-white  cursor-pointer pb-3' ><FontAwesomeIcon icon={faGear} /><span className='px-3'>Setting</span> </a>
          <a className='text-white   cursor-pointer pb-3'><FontAwesomeIcon icon={faCreditCard} /> <span className='px-3'>Payments</span></a>
          <a className='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faHotel} /><span className='px-3'>Hostel</span> </a>
          <a className='text-white  cursor-pointer pb-3' ><FontAwesomeIcon icon={faGear} /><span className='px-3'>Setting</span> </a>
          <a className='text-white   cursor-pointer pb-3'><FontAwesomeIcon icon={faCreditCard} /> <span className='px-3'>Payments</span></a>
          <a className='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faHotel} /><span className='px-3'>Hostel</span> </a>
          <a className='text-white  cursor-pointer pb-3' ><FontAwesomeIcon icon={faGear} /><span className='px-3'>Setting</span> </a>
          <a className='text-white   cursor-pointer pb-3'><FontAwesomeIcon icon={faCreditCard} /> <span className='px-3'>Payments</span></a>
          <a className='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faHotel} /><span className='px-3'>Hostel</span> </a>
          <a className='text-white  cursor-pointer pb-3' ><FontAwesomeIcon icon={faGear} /><span className='px-3'>Setting</span> </a>
          <a className='text-white   cursor-pointer pb-3'><FontAwesomeIcon icon={faCreditCard} /> <span className='px-3'>Payments</span></a>
          <a className='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faHotel} /><span className='px-3'>Hostel</span> </a>
          <a className='text-white  cursor-pointer pb-3' ><FontAwesomeIcon icon={faGear} /><span className='px-3'>Setting</span> </a>
          <a className='text-white   cursor-pointer pb-3'><FontAwesomeIcon icon={faCreditCard} /> <span className='px-3'>Payments</span></a>
          <a className='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faHotel} /><span className='px-3'>Hostel</span> </a>
          <a className='text-white  cursor-pointer pb-3' ><FontAwesomeIcon icon={faGear} /><span className='px-3'>Setting</span> </a>
          <a className='text-white   cursor-pointer pb-3'><FontAwesomeIcon icon={faCreditCard} /> <span className='px-3'>Payments</span></a>
          <a className='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faHotel} /><span className='px-3'>Hostel</span> </a>
          <a className='text-white  cursor-pointer pb-3' ><FontAwesomeIcon icon={faGear} /><span className='px-3'>Setting</span> </a>
          <a className='text-white   cursor-pointer pb-3'><FontAwesomeIcon icon={faCreditCard} /> <span className='px-3'>Payments</span></a>
          <a className='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faHotel} /><span className='px-3'>Hostel</span> </a>
          <a className='text-white  cursor-pointer pb-3' ><FontAwesomeIcon icon={faGear} /><span className='px-3'>Setting</span> </a>
          <a className='text-white   cursor-pointer pb-3'><FontAwesomeIcon icon={faCreditCard} /> <span className='px-3'>Payments</span></a>
          <a className='text-white  cursor-pointer pb-3'><FontAwesomeIcon icon={faHotel} /><span className='px-3'>Hostel</span> </a>
          <a className='text-white  cursor-pointer pb-3' ><FontAwesomeIcon icon={faGear} /><span className='px-3'>Setting</span> </a>
        </div>: null 
        
      }
     

      {/* <ul>
          <li>hello pk</li>
          <li>bye pk</li>
          <li>bye pk</li>
        </ul> */}
    </div>
    //   <div
    //   className={`fixed top-0 left-0 h-full bg-blue-800 text-white p-4 transition-transform duration-300 ${
    //     clicked ? 'translate-x-0' : '-translate-x-full'
    //   }`}
    //   style={{ width: '16rem' }}
    // >
    //   <h2 className="text-2xl font-semibold mb-4">Sidebar</h2>
    //   <ul>
    //     <li className="mb-2"><a href="#dashboard" className="hover:underline">Dashboard</a></li>
    //     <li className="mb-2"><a href="#settings" className="hover:underline">Settings</a></li>
    //     <li><a href="#profile" className="hover:underline">Profile</a></li>
    //   </ul>
    // </div>
  )
}
export default Sidebar;