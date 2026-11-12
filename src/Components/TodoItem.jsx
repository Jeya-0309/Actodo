function TodoItem({ id, index, activity, activityArr, setActivityArr }) {
  const handleDelete = (removeId) => {
    const tempArr = activityArr.filter((item) => {
      return item.id !== removeId;
    });
    setActivityArr(tempArr);
  };
  return (
    <div className="flex justify-between">
      <p>
        {index + 1}. {activity}
      </p>
      <button className="text-red-600" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
}
export default TodoItem;
