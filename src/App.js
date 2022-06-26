import "./App.css";
import React from "react";
import { useSelector } from "react-redux";

import TaskCard from "./components/TaskCard";

// import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";

function App() {
  const { tasks } = useSelector((state) => state);

  // const darkTheme = createTheme({
  //   palette: {
  //     mode: "dark",
  //     primary: {
  //       main: "#29b6f6",
  //       dark: "#0f49ad",
  //     },
  //     secondary: {
  //       main: "#D93A8A",
  //     },
  //     success: {
  //       main: "#388e3c",
  //     },
  //     info: {
  //       main: "#f5b342",
  //     },
  //   },
  // });

  return (
    // <ThemeProvider theme={darkTheme}>
    <div className="App">
      <div className="page-header">Routine Pipette Check and Calibration</div>
      <Button variant="contained" color="secondary">
        More Info
      </Button>
      <div className="container">
        {tasks.map((task, idx) => (
          <TaskCard key={idx} task={task} index={idx} />
        ))}
      </div>
    </div>
    // </ThemeProvider>
  );
}

export default App;
