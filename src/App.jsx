import { useState } from 'react'
import './index.css';
import 'remixicon/fonts/remixicon.css'
import { nanoid } from 'nanoid';

function App() {
  let [data, setData] = useState(JSON.parse(localStorage.getItem("task")) || []);
  let [tasks, setTasks] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    const newData = { tasks, complete: "false", id: nanoid() };
    setData([...data, newData]);
    setTasks("");

    localStorage.setItem("task", JSON.stringify([...data, newData]));

  }

  const CompleteHandler = (index) => {
    const copyTasks = [...data];
    copyTasks[index].complete = !copyTasks[index].complete;
    setData(copyTasks)
    localStorage.setItem("task", JSON.stringify(copyTasks))
  }
  console.log(data);

  const DeleteHanlder = (index)=>{
    const copyTask = [...data];
    copyTask.splice(index,1);
    setData(copyTask)
    localStorage.setItem("task",JSON.stringify(copyTask));
  }


  return (
    <>
      <div className="container min-h-screen w-screen bg-zinc-900 flex items-center justify-center flex-col lg:w-screen">
        
        <div className="inputContainer">
          <form onSubmit={formHandler} className="flex items-center justify-center mt-2 gap-2">
            <input onChange={(e) => setTasks(e.target.value)} value={tasks} type="text" name="tasks" className="border  rounded-md  text-white bg-transparent py-2 px-1" placeholder='Enter your task' />
            <button className="px-3 text-white text-3xl py-1 bg-red-500 rounded-full">+</button>
          </form>
        </div>
        <div className="mt-2 tasksList px-2 min-h-[10vh] w-full flex flex-col gap-2 lg:w-[25vw]">
          {data.length > 0 ? (
            data.map((tasks, index) => {
              return (<div key={tasks.id} className="flex items-center justify-between task w-full border border-zinc-400 text-white px-2 py-3">
                <div onClick={() => CompleteHandler(index)} className='flex items-center gap-2'>
                  <div className={`check h-[1.5rem] w-[1.5rem] rounded-full ${tasks.complete === true ? "bg-green-400" : "border border-red-500"}`}></div>
                  <h1 className={`${tasks.complete === true ? "line-through" : 'none'}`}>{tasks.tasks}</h1>
                </div>
                <div className="controls" onClick={()=>DeleteHanlder(index)}><i className="ri-delete-bin-2-line"></i></div>
              </div>)
            })
          ) : (
            <h1 className="text-white text-6xl font-['manuka'] text-center">No Pending Tasks 😢</h1>
          )}
        </div>
      </div>
    </>
  )
}

export default App
