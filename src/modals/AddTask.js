import React, { useState } from 'react'
import { useStore } from '../store'

const AddTask = ({ text, setText, open, state, setOpen }) => {
    const addTaskItem = useStore((store) => store.addTask)
    return (
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-100 p-3 border-gray-300 rounded-lg flex flex-col gap-y-5 items-center' style={{
            display: open ? 'flex' : 'none',
        }}>
            <input type="text" placeholder='Add task' className='text-black py-2 px-2 placeholder:text-gray-400 placeholder:font-semibold font-semibold' value={text} onChange={(e) => setText(e.target.value)} />
            <button className='bg-black rounded-lg w-full py-1 text-white' onClick={() => { 
                addTaskItem(text, state)
                setText("")
                setOpen(false)
             }}>Add</button> 
        </div>
    )
}

export default AddTask