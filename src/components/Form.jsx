import React from 'react'

function Form(props) {
    const data = props.data;
    const setData = props.setData;
    const tasks = props.tasks
    const setTasks = props.setTasks

    const formHandler = (e) => {
        e.preventDefault();
        const newData = { tasks, complete: "false", id: nanoid() };
        setData([...data, newData]);
        setTasks("");

        localStorage.setItem("tasks", JSON.stringify([...data, newData]));

    }
    return <>
        <div className="inputContainer">
            <form onSubmit={formHandler} className="flex items-center justify-center mt-2 gap-2">
                <input onChange={(e) => setTasks(e.target.value)} value={tasks} type="text" name="tasks" className="border  rounded-md  text-white bg-transparent py-2 px-1" placeholder='Enter your task' />
                <button className="px-3 text-white text-3xl py-1 bg-red-500 rounded-full">+</button>
            </form>
        </div>
    </>
}

export default Form