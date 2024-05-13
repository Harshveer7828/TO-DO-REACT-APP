import React from 'react'
import { nanoid } from 'nanoid';


const Create = (props) => {
    const data = props.data;
    const setData = props.setData;
    let [tasks, setTasks] = useState("");

    const CompleteHandler = (index) => {
        const copyTasks = [...data];
        copyTasks[index].complete = !copyTasks[index].complete;
        setData(copyTasks)
        localStorage.setItem("task", JSON.stringify(copyTasks))
    }
    console.log(data);

    const DeleteHanlder = (index) => {
        const copyTask = [...data];
        copyTask.splice(index, 1);
        setData(copyTask)
        localStorage.setItem("task", JSON.stringify(copyTask));
    }
    return <>
        <div className="mt-2 tasksList px-2 min-h-[10vh] w-full flex flex-col gap-2 lg:w-[25vw]">
            {data.length > 0 ? (
                data.map((tasks, index) => {
                    return (<div key={tasks.id} className="flex items-center justify-between task w-full border border-zinc-400 text-white px-2 py-3">
                        <div onClick={() => CompleteHandler(index)} className='flex items-center gap-2'>
                            <div className={`check h-[1.5rem] w-[1.5rem] rounded-full ${tasks.complete === true ? "bg-green-400" : "border border-red-500"}`}></div>
                            <h1 className={`${tasks.complete === true ? "line-through" : 'none'}`}>{tasks.tasks}</h1>
                        </div>
                        <div className="controls" onClick={() => DeleteHanlder(index)}><i className="ri-delete-bin-2-line"></i></div>
                    </div>)
                })
            ) : (
                <h1 className="text-white text-6xl font-['manuka'] text-center">No Pending Tasks 😢</h1>
            )}
        </div>
    </>
}

export default Create