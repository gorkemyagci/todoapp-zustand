import React, { useState } from 'react'
import AddTask from '../modals/AddTask'
import { useStore } from '../store'

const TaskItem = ({key,task}) => {
    const deleteTaskItem = useStore(store => store.deleteTask)
    function setColor(state) {
        switch(state) {
            case 'TODO':
                return 'bg-red-500'
            case 'DOING':
                return 'bg-yellow-500'
            case 'DONE':
                return 'bg-green-500'
            default:
                return 'bg-gray-500'
        }
    }
    const setDraggedTask = useStore(store => store.setDraggedTask)
  return (
    <div key={key} onDragStart={() => {
        setDraggedTask(task.id)
    }} draggable className='relative border-2 border-white p-2 rounded-md border-opacity-20 cursor-pointer'>
        <span onClick={() => {
            deleteTaskItem(task.id)
        }} className='absolute right-2 top-2 text-red-400 font-medium'>Delete</span>
        <p>{task.title}</p>
        <div className='pt-4 flex justify-end'>
            <span className={`${setColor(task.state)} rounded-md px-2`}>{task.state}</span>
        </div>
    </div>
  )
}

export default TaskItem