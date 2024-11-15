// import TaskItem from './TaskItem';

// function TaskList({ tasks, deleteTask, toggleComplete }) {
//   return (
//     <div className="space-y-4">
//       {tasks.length === 0 ? (
//         <p className="text-gray-500 text-center">No tasks available</p>
//       ) : (
//         tasks.map(task => (
//           <TaskItem key={task.id} task={task} deleteTask={deleteTask} toggleComplete={toggleComplete} />
//         ))
//       )}
//     </div>
//   );
// }

// export default TaskList;



// // second updated

import PropTypes from 'prop-types';
import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask, toggleComplete }) {
  return (
    <div className="space-y-4">
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center">No tasks available</p>
      ) : (
        tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />
        ))
      )}
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

export default TaskList;
