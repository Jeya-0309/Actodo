import TodoItem from "./TodoItem";

function TodoList({ activityArr, setActivityArr }) {
  return (
    <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
      <h1 className="text-2xl font-medium">Today's Activity</h1>

      {activityArr.length === 0 ? <p>You haven't added anything yet</p> : ""}
      {activityArr.map((item, index) => {
        return (
          <TodoItem
            id={item.id}
            index={index}
            activity={item.activity}
            activityArr={activityArr}
            setActivityArr={setActivityArr}
          />
        );
      })}
    </div>
  );
}
export default TodoList;
