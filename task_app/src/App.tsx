import React from "react";
import "./App.css";
import AllTasks from "./pages/AllTasks";
import CreateTask from "./pages/CreateTask";
import TaskDetails from "./pages/TaskDetails";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";
import ListingTask from "./components/ListingTask";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllTasks />} />
        <Route path="/create_task" element={<CreateTask />} />
        <Route path="/task/:id" element={<TaskDetails />} />
        <Route path="/task/list" element={<ListingTask />} />
      </Routes>
    </div>
  );
}

export default App;
