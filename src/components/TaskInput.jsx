import { useState } from 'react';

function TaskInput({ addTask }) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Medium');

//   const handleAdd = () => {
//     if (title.trim()) {
//       addTask(title, priority);
//       setTitle('');
//     }
//   };

  return (
    <div className="flex items-center gap-4 mb-6">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none"
        placeholder="Add a new task"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="px-4 py-2 border rounded-lg"
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Add Task
      </button>
    </div>
  );
}

export default TaskInput;
