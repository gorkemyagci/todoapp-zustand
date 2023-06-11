import Task from "./components/Task";

function App() {
  return (
    <div className="flex items-start gap-x-5 h-screen overflow-y-auto bg-[#367292] justify-between px-20 py-10">
      <Task state="TODO" />
      <Task state="DOING" />
      <Task state="DONE" />
    </div>
  );
}

export default App;