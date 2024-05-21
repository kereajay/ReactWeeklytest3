import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Removebg from './Removebg'
import Fake from './Fake'
import Navbar from './Navbar'
import Body from './Body'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <br />
    <br />
    <Body className="mt-[20%] "/>
    {/* <Removebg/> */}
    {/* <Fake/> */}
    </>
  )
}

export default App
