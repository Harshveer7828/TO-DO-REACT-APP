import { useState } from 'react'
import './index.css';
import 'remixicon/fonts/remixicon.css'

function App() {


  return (
    <>
      <div className="container h-screen w-screen bg-zinc-900 flex items-center justify-center flex-col">
        <div className="information h-[20vh] w-[90%] border-2 border-zinc-200 flex items-center justify-between px-4">
          <div className="text">
            <h1 className="text-white text-6xl font-bold font-['manuka']">Let's ToDo</h1>
            <h3 className="text-white text-3xl font-['manuka']">Keep Doing Thing's</h3>
          </div>
          <h3 className="text-8xl text-white font-['manuka']">7/0</h3>
        </div>
        <div className="inputContainer">
          <form className="flex items-center justify-center mt-2 gap-2">
            <input type="text" name="tasks" className="border  rounded-md  text-white bg-transparent py-2 px-1" placeholder='Enter your task' />
            <button className="px-3 text-white text-3xl py-1 bg-red-500 rounded-full">+</button>
          </form>
        </div>
        <div className="mt-2 tasksList px-2 min-h-[10vh] w-full flex flex-col gap-2">
          <div className="flex items-center justify-between task w-full border border-zinc-400 text-white px-2 py-3">
            <div className='flex items-center gap-2'>
              <div className="check h-[1.5rem] w-[1.5rem] rounded-full bg-green-400"></div>
              <h1 className='line-through	'>This is my tasks</h1>
            </div>
            <div className="controls "><i className="ri-delete-bin-2-line"></i></div>
          </div>
          <div className="flex items-center justify-between task w-full border border-zinc-400 text-white px-2 py-3">
            <div className='flex items-center gap-2'>
              <div className="check h-[1.5rem] w-[1.5rem] rounded-full bg-red-400"></div>
              <h1>This is my tasks</h1>
            </div>
            <div className="controls "><i className="ri-delete-bin-2-line"></i></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
