import "./App.css";
import React from "react";
import { useSelector } from "react-redux";

import TaskCard from "./components/TaskCard";
import MoreInfoModal from "./components/modals/MoreInfoModal";

function App() {
  const { tasks } = useSelector((state) => state);

  return (
    <div className="App">
      <div className="page-header">Routine Pipette Check and Calibration</div>
      <MoreInfoModal />
      <div className="container">
        <h2>Procedure</h2>
        {tasks.map((task, idx) => (
          <TaskCard key={idx} task={task} index={idx} />
        ))}
      </div>
    </div>
  );
}

export default App;
