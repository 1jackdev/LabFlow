import tasksReducer, { updateTask, markTaskAsDone } from "./tasksSlice";

describe("updateTask reducer", () => {
  const initialState = {
    tasks: [
      {
        title: "Plant seed",
        type: "text",
        subSteps: [
          {
            name: "Plant a seed in dirt",
            done: false,
          },
        ],
      },
    ],
  };

  it("should handle initial state", () => {
    expect(tasksReducer(initialState.tasks, {})).toEqual([
      {
        title: "Plant seed",
        type: "text",
        subSteps: [
          {
            name: "Plant a seed in dirt",
            done: false,
          },
        ],
      },
    ]);
  });

  it("should handle marking a task as done", () => {
    const actual = tasksReducer(
      initialState.tasks,
      markTaskAsDone({ index: 0, subStepIdx: 0 })
    );
    expect(actual[0].subSteps[0].done).not.toEqual(
      initialState.tasks[0].subSteps[0].done
    );
    expect(actual[0].subSteps[0].done).toBe(true);
  });

  it("should handle updating a title", () => {
    const newTitle = "Hello";
    const actual = tasksReducer(
      initialState.tasks,
      updateTask({
        index: 0,
        id: "title",
        value: newTitle,
      })
    );
    expect(actual[0].title).toBe(newTitle);
  });
  it("should handle updating a substep", () => {
    const newSubStep = "do something else";
    const actual = tasksReducer(
      initialState.tasks,
      updateTask({
        index: 0,
        id: "0",
        value: newSubStep,
      })
    );
    expect(actual[0].subSteps[0].name).toBe(newSubStep);
  });
});
