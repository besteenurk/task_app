import React from "react";
import "./App.css";
import AllTasks from "./components/AllTasks";
import CreateTask from "./components/CreateTask";
import TaskDetails from "./components/TaskDetails";
import UpdateTask from "./components/UpdateTask";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllTasks />} />
        <Route path="/create_task" element={<CreateTask />} />
        <Route path="/task/:id" element={<TaskDetails />} />
        <Route path="/task/update" element={<UpdateTask />} />
      </Routes>
    </div>
  );
}

export default App;
