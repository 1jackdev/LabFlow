import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      title: "Prepare balance",
      type: "text",
      subSteps: [
        {
          name: "Place a beaker with 1000ul of distilled H20 on the balance and tare",
          done: false,
        },
      ],
    },
    {
      title: "Place a new pipette tip on the pipettor",
      type: "text",
      subSteps: [
        {
          name: "Place a new pipette tip on the pipettor",
          done: false,
        },
      ],
    },
    {
      title: "Weigh the pipettes at 100% volume five times",
      type: "text",
      subSteps: [
        {
          name: "Aspirate and dispense 100% of the volume into the beaker",
          done: false,
        },
        { name: "Record the weight in the table in step 6.4", done: false },
        { name: "Tare the balance", done: false },
        { name: "Repeat steps 6.3.1 to 6.3.3 four more times", done: false },
      ],
    },
    {
      title: "Data Tables: Weight of water from step 6.3",
      type: "graph",
      subSteps: [],
      graph: [
        [
          "Test Volume",
          "Dispense-1",
          "Dispense-2",
          "Dispense-3",
          "Dispense-4",
          "Dispense-5",
        ],
        [["100%", "25"]],
      ],
    },
    {
      title: "Calculate Mean, Std. Deviation, Accuracy and Precision",
      type: "graph",
      subSteps: [],
      graph: [
        [
          "Test Volume",
          "Mean (μl)",
          "Std. Deviation (μl)",
          "Accuracy (%)",
          "Precision (%)",
        ],
        [["100%", "25"]],
      ],
    },
  ],
};

export const tasks = createSlice({
  name: "tasks",
  initialState: initialState.tasks,
  reducers: {
    updateTask: (state, action) => {
      const existingTask = state.filter(
        (a) => a.title === action.payload.title
      );
      const { title, subSteps } = action.payload;
      console.log(existingTask, title, subSteps);
    },
    markTaskAsDone: (state, action) => {
      const { index, subStepIdx } = action.payload;

      state[index].subSteps[subStepIdx].done =
        !state[index].subSteps[subStepIdx].done;
    },
  },
});

export const { updateTask, markTaskAsDone } = tasks.actions;

export const selectTasks = (state) => state;

export default tasks.reducer;
