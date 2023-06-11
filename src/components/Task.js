import React, { useMemo, useState } from 'react'
import { useStore } from '../store'
import TaskItem from './TaskItem'
import shallow from 'zustand/shallow'
import AddTask from '../modals/AddTask'

const Task = ({ state }) => {
    const tasks = useStore(
        (store) => store.tasks.filter((task) => task.state === state),
        shallow
    )
    const [open, setOpen] = useState(false)
    const [text, setText] = useState("")
    const [drop, setDrop] = useState(false);
    const setDraggedTask = useStore(store => store.setDraggedTask)
    const draggedTask = useStore(store => store.draggedTask)
    const setMoveTask = useStore(store => store.moveTask)
    return (
        <div onDragOver={(e) => {
            e.preventDefault()
            setDrop(true)
        }} onDrop={(e) => {
            setMoveTask(draggedTask, state)
            setDraggedTask(null)
            setDrop(false)
        }} onDragLeave={() => {
            setDrop(false)
        }}  style={{
            boxShadow: drop ? '0px 0px 10px 0px rgba(0,0,0,0.75)' : 'none',
            border: drop ? '2px dashed white' : 'none'
        }} className='max-w-[33%] bg-black bg-opacity-80 w-full rounded-lg px-3 py-2 text-white'>
            <div className='border-b border-white pb-5 flex items-center justify-between'>
                <h2 className='font-semibold'>{state}</h2>
                <button onClick={() => setOpen(true)} className='px-1.5 py-0.5 rounded-md bg-white bg-opacity-25'>Add</button>
            </div>
            <ul className='pt-5 flex flex-col gap-y-3'>
                {tasks.length === 0 && <p className='text-center font-bold'>No tasks yet</p>}
                {tasks.map((task, index) => {
                    return (
                        <TaskItem key={index} task={task} />
                    )
                })}
            </ul>
            <AddTask text={text} setText={setText} open={open} state={state} setOpen={setOpen} />
        </div>
    ) 
}

export default Task