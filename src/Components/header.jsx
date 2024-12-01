import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Header = () => {
    const [clicked,setClicked]=React.useState(false)
    const [status,setStatus]=React.useState(false)
    return (
        
        <header class='h-[20%]  w-[100%]  flex   justify-center px-5 flex-col'  >
            <div class='flex w-[100%]'>
                <input type="text" placeholder="search here" class='px-2 rounded-l-md w-[100%] hover:bg-gray-100 border-[1px] focus:outline-none  border-gray-300  ' >
                </input>
                <a class='p-[2%] rounded-r-md bg-white cursor-pointer border-[1px] hover:bg-[#00afb5] hover:text-white border-gray-300 text-[#00afb5] '><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
            </div>
            <div >
                <div class=' flex place-content-between pt-6 '>
                    <div class='flex text-gray-500'>
                        <span class='cursor-pointer select-none' onClick={()=>setClicked(!clicked)} >
                            pages
                            <FontAwesomeIcon icon={faAngleDown} />
                        </span>
                       
                        <span class='cursor-pointer select-none' onClick={()=>setStatus(!status)}>
                            Auth
                            <FontAwesomeIcon icon={faAngleDown} />
                        </span>

                    </div>
                    <span class='flex '>

                        <img class='w-8 h-8 mx-2' src="https://www.svgrepo.com/show/81103/avatar.svg"></img>

                        <p class='text-gray-500 '>Umar</p>
                    </span>
                </div>
            </div>
            { clicked?
                   <block class='flex flex-col  w-[30%]   absolute top-[25%] p-2 shadow-xl '>
                   <a class='text-gray-500 hover:bg-slate-200  cursor-pointer'> Hello word</a>
                   <a class='text-gray-500 hover:bg-slate-200  cursor-pointer'>Bye word </a>
                   <a class='text-gray-500 hover:bg-slate-200  cursor-pointer'>Bye word </a>
                   <a class='text-gray-500 hover:bg-slate-200  cursor-pointer'> Bye word </a>
                   <a class='text-gray-500 hover:bg-slate-200  cursor-pointer'>Bye word </a>
               </block>:null
            }
            
            { status?
             <block class='flex flex-col  w-[30%] absolute top-[25%] left-[15%] p-2 shadow-xl'>
             <a class='text-gray-500 hover:bg-slate-200  cursor-pointer'> Hello word</a>
             <a class='text-gray-500 hover:bg-slate-200  cursor-pointer'>Bye word </a>
             <a class='text-gray-500 hover:bg-slate-200  cursor-pointer'>Bye word </a>
             <a class='text-gray-500 hover:bg-slate-200  cursor-pointer'> Bye word </a>
             <a class='text-gray-500 hover:bg-slate-200  cursor-pointer'>Bye word </a>
         </block>:null

        }
                       
        </header>
    )
}
export default Header;