

import { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import SearchBar from './components/SearchBar';
import SortButtons from './components/SortButtons';

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortType, setSortType] = useState('');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (title, priority) => {
    const newTask = {
      id: Date.now(),
      title,
      priority,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const filteredTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortType === 'priority') {
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      } else if (sortType === 'completed') {
        return a.completed === b.completed ? 0 : a.completed ? 1 : -1;
      }
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Task Manager</h1>
        <TaskInput addTask={addTask} />
        <SearchBar setSearchQuery={setSearchQuery} />
        <SortButtons setSortType={setSortType} />
        <TaskList tasks={filteredTasks} deleteTask={deleteTask} toggleComplete={toggleComplete} />
      </div>
    </div>
  );
}

export default App;
