import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <div>
                <nav className='flex items-center bg-sky-400 py-4 fixed w-[100%] '>
                    <h1 className='text-2xl font-bold px-5'><Link to="/Body">Badass</Link></h1>
                    <ul type="none" className='flex px-4'>
                        <li className='px-4 text-lg'><Link to="/Filechange">Covert</Link></li>
                        <li className='px-4 text-lg'><Link to="/Multipleimages">Download</Link></li>
                        <li className='px-4 text-lg'><Link to="/Removebg">RemoveBg</Link></li>
                    </ul>
                </nav>
            </div>


        </div>
    )
}

export default Navbar
