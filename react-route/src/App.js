import React, { useState } from "react";
import Parcel from "single-spa-react/parcel";
import { v4 as uuid } from "uuid";

const App = () => {
  const [task, updateTask] = useState("");

  const handleChange = (event) => {
    updateTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatchEvent(
      new CustomEvent("@mc/react-route/todo/add-task", {
        detail: {
          id: uuid(),
          describe: task,
        },
      })
    );
    updateTask("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={task} />
        <button>Add</button>
      </form>
      <Parcel config={System.import("@mc/react-parcel")} />
    </>
  );
};

export default App;
