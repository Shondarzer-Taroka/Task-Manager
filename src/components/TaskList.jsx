import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import TaskItem from './TaskItem';
import './animations.css';

function TaskList({ tasks, deleteTask, toggleComplete }) {
    return (
        <TransitionGroup className="task-list space-y-4">
            {tasks.map(task => (
                <CSSTransition
                    key={task.id}
                    timeout={500}
                    classNames="task"
                >
                    <TaskItem
                        task={task}
                        deleteTask={deleteTask}
                        toggleComplete={toggleComplete}
                    />
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
}

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
    deleteTask: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
};

export default TaskList;
