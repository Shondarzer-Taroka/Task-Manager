

import PropTypes from 'prop-types';
import { FaTrash, FaCheckCircle, FaRegCircle } from 'react-icons/fa';

function TaskItem({ task, deleteTask, toggleComplete }) {
    return (
        <div
            className={`flex items-center justify-between p-4 rounded-lg shadow-md transition-all duration-300 ${
                task.completed ? 'bg-green-100' : 'bg-white'
            }`}
        >
          
            <button
                onClick={() => toggleComplete(task.id)}
                className="text-green-500 hover:text-green-700 transition duration-200 mr-4"
                title={task.completed ? 'Mark as Incomplete' : 'Mark as Completed'}
            >
                {task.completed ? <FaCheckCircle /> : <FaRegCircle />}
            </button>

          
            <div
                className={`cursor-pointer flex-1 ${
                    task.completed ? 'line-through text-gray-500' : ''
                }`}
                onClick={() => toggleComplete(task.id)}
            >
                <h3 className="text-lg font-medium">{task.title}</h3>
                <span className="text-sm text-gray-500">Priority: {task.priority}</span>
            </div>

          
            <button
                onClick={() => deleteTask(task.id)}
                className="text-red-500 hover:text-red-700 transition duration-200"
                title="Delete Task"
            >
                <FaTrash />
            </button>
        </div>
    );
}

TaskItem.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        priority: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired,
    deleteTask: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
};

export default TaskItem;
