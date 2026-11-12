import { useState } from "react";

function AddTodoForm({ activityArr, setActivityArr }) {
  const [newActivity, setNewActivity] = useState("");
  const handleChange = (event) => {
    setNewActivity(event.target.value);
  };
  const addActivity = () => {
    setActivityArr([
      ...activityArr,
      { id: activityArr.length + 1, activity: newActivity },
    ]);
    setNewActivity("");
  };

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-medium">Manage Activities</h1>
      <div>
        <input
          type="text"
          className="border border-black bg-transparent p-2"
          placeholder="  Next Activity? "
          value={newActivity}
          onChange={handleChange}
        ></input>{" "}
        <button
          className="bg-black text-white p-2 border rounded-md"
          onClick={addActivity}
        >
          Add
        </button>
      </div>
    </div>
  );
}
export default AddTodoForm;
