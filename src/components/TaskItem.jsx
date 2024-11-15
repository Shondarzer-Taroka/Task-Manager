import PropTypes from "prop-types";
function TaskItem({ task, deleteTask, toggleComplete }) {
    return (
      <div className={`p-4 border rounded-lg flex justify-between items-center ${task.completed ? 'bg-green-100' : 'bg-white'}`}>
        <div>
          <input type="checkbox" checked={task.completed} onChange={() => toggleComplete(task.id)} className="mr-4" />
          <span className={`${task.completed ? 'line-through text-gray-400' : ''}`}>{task.title}</span>
          <span className="ml-2 text-sm text-gray-500">({task.priority})</span>
        </div>
        <button
          onClick={() => deleteTask(task.id)}
          className="text-red-500 hover:text-red-600"
        >
          Delete
        </button>
      </div>
    );
  }
  


  TaskItem.propTypes = {
    task: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      priority: PropTypes.oneOf(["High", "Medium", "Low"]),
    }).isRequired,
    deleteTask: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
  };

export default TaskItem;