import { create } from "zustand"
import { persist } from "zustand/middleware"

const store = persist((set) => ({
    draggedTask: null,
    tasks: [],
    addTask: (title, state) => set((store) => ({ tasks: [...store.tasks, { id: Math.floor(Math.random() * 1000).toString(), title: title, state: state }] })),
    deleteTask: (id) => set((store) => ({ tasks: store.tasks.filter((task) => task.id !== id) })),
    setDraggedTask: (id) => set(() => ({ draggedTask: id })),
    moveTask: (id, state) => set((store) => ({ tasks: store.tasks.map((task) => task.id === id ? { ...task, state: state } : task) }))
}), { name: "store" })

const log = (config) => (set, get, api) => config(
    (args) => {
        console.log(args);
        set(args)
    },
    get,
    api
)

export const useStore = create(log(store))