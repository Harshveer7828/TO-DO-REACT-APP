import React from 'react'

const Header = (props) => {
    const data = props.data;
    return <>
        <div className="information h-[20vh] w-[90%] border-2 border-zinc-200 flex items-center justify-between px-4 lg:w-[25vw]">
            <div className="text">
                <h1 className="text-white text-6xl font-bold font-['manuka']">Let's ToDo</h1>
                <h3 className="text-white text-3xl font-['manuka']">Keep Doing Thing's</h3>
            </div>
            <h3 className="text-8xl text-white font-['manuka']">{data.filter(t => t.complete === true).length}/{data.length} </h3>
        </div>
    </>
}

export default Header