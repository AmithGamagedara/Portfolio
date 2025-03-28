import { useState } from 'react'
import './App.css'
import AnimatedBackground from "./Home";
import "./app/globals.css";


function App() {

  return (
    <>
    <div className="relative w-full h-screen flex items-center justify-center">
      <AnimatedBackground />
      <div className="relative z-10 text-white text-center">
       
      </div>
    </div>
    <div><h1 className='text-black text-2xl font-bold p-90'>Amith Gamagedara</h1></div>
      
    </>
  )
}

export default App
