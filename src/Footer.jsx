import React from 'react'
import { SiConvertio } from "react-icons/si";
import { HiMiniArrowUpTray } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate()
    return (
        <div className='bg-[#121420] py-2 '>
            <div className='flex justify-between w-[95%] m-auto '>
                <div className='text-white' onClick={()=>navigate("/Filechange")}>
                    <SiConvertio className='text-xl text-sky-500 ml-5' />
                    <p>Convert</p>

                </div>
                <div className='text-white' onClick={()=>navigate("/Removebg")}>
                    <HiMiniArrowUpTray className='text-xl text-sky-500 ml-5' />

                    <p>Remove</p>

                </div>
                <div className='text-white' onClick={()=>navigate("/Multipleimages")}>
                    <FaSearch className='text-xl text-sky-500 ml-2' />

                    <p>Search</p>

                </div>
            </div>

        </div>
    )
}

export default Footer
