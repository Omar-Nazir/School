import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";


const Header = () => {
    const [clicked, setClicked] = React.useState(false)
    const [status, setStatus] = React.useState(false)
    console.log(setInterval);
    return (

        <header className='h-[20%] lg:h-[10%] w-[100%] border-[0.1px] border-black border-opacity-10  flex lg:items-center relative top-0  justify-center px-5 flex-col lg:flex-row'  >

            <div className='flex w-[100%]'>
                <input type="text"  placeholder="search here" className='px-2 h-10 text-sm text-gray-700 rounded-l-md  w-[100%] lg:w-[50%] hover:bg-gray-100 border-[1px] focus:outline-none  border-gray-300  select-none ' >
                </input>
                <a className='p-[5px]  h-10 rounded-r-md bg-white cursor-pointer border-[1px] hover:bg-[#00afb5] hover:text-white border-gray-300 text-[#00afb5] '><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
            </div>
            <div className='lg:w-[50%]'>
                <div className=' flex place-content-between lg:place-content-end pt-6 lg:p-0  '>
                    <div className='flex text-gray-500 lg:px-[5%]'>
                        <span className='cursor-pointer select-none p-2' onClick={() => setClicked(!clicked,setStatus(false))} >
                            pages
                            <FontAwesomeIcon icon={faAngleDown} />
                        </span>

                        <span className='cursor-pointer select-none p-2' onClick={() => setStatus(!status,setClicked(false))}>
                            Auth
                            <FontAwesomeIcon icon={faAngleDown} />
                        </span>

                    </div>
                    <span className='flex px-3 '>

                        <img className='w-8 h-8 mx-2' src="https://www.svgrepo.com/show/81103/avatar.svg"></img>

                        <p className='text-gray-500 select-none  '>Umar</p>
                    </span>
                </div>
            </div>
            {clicked ?
                <div className='flex flex-col  w-[170px]   absolute top-[80%]  lg:top-[70%] lg:right-[6%] p-2 shadow-xl  select-none'>
                    <a className='text-gray-500 hover:bg-slate-200  cursor-pointer'> Hello word</a>
                    <a className='text-gray-500 hover:bg-slate-200  cursor-pointer'>Bye word </a>
                    <a className='text-gray-500 hover:bg-slate-200  cursor-pointer'>Bye word </a>
                    <a className='text-gray-500 hover:bg-slate-200  cursor-pointer'> Bye word </a>
                    <a className='text-gray-500 hover:bg-slate-200  cursor-pointer'>Bye word </a>
                </div> : null
            }

            {status ?
                <div className='flex flex-col  w-[170px] absolute top-[80%]  left-[20%] md:left-[15%] lg:left-[88%]  lg:top-[70%]   p-2 shadow-xl  select-none'>
                    <a className='text-gray-500 hover:bg-slate-200  cursor-pointer'> Hello word</a>
                    <a className='text-gray-500 hover:bg-slate-200  cursor-pointer'>Bye word </a>
                    <a className='text-gray-500 hover:bg-slate-200  cursor-pointer'>Bye word </a>
                    <a className='text-gray-500 hover:bg-slate-200  cursor-pointer'> Bye word </a>
                    <a className='text-gray-500 hover:bg-slate-200  cursor-pointer'>Bye word </a>
                </div> : null
            }
            {/* <button className='bg-pink-200 transition -translate-x-28 '>here</button>*/}
        </header>
    )
}
export default Header;