import { useState } from 'react'
import './index.css';
import 'remixicon/fonts/remixicon.css'
import Header from './components/Header.jsx';
import Form from './components/Form.jsx';
import Create from './components/Create.jsx';


function App() {
  let [data, setData] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  let [tasks, setTasks] = useState("");
 
  

  


  return (
    <>
      <div className="container min-h-screen w-screen bg-zinc-900 flex items-center justify-center flex-col lg:w-screen">
        {/* Header Container */}
        <Header data={data} />

        {/* form gandleer */}
        <Form data={data} setData={setData} tasks={tasks} setTasks={setTasks} />

        {/* tasks  */}
        <Create data={data} setData={setData}/>
      </div>
    </>
  )
}

export default App
