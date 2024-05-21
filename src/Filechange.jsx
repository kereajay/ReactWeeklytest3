import React from 'react'
import { useNavigate } from 'react-router-dom'

function Filechange() {
  const navigate = useNavigate()
  return (
    <div className='p-28'>
      <div className='py-20 text-center'>

          <h1 className='text-5xl font-bold text-white'>Covert your following file format to</h1>
          <br />
          <br />
        <div className='flex gap-10 justify-center'>
          <button className='px-10 text-xl font-semibold text-white bg-blue-400 py-2 rounded-xl' onClick={()=>navigate('/jpeg')} >JPEG</button>
          <button className='px-10 text-xl font-semibold text-white bg-blue-400 py-2 rounded-xl' onClick={()=>navigate('/png')} >PNG</button>
          <button className='px-10 text-xl font-semibold text-white bg-blue-400 py-2 rounded-xl' onClick={()=>navigate('/WEB')} >WEBAP</button>

        </div>



      </div>

    </div>
  )
}

export default Filechange
