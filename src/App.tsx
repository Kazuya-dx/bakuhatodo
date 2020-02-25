import React from 'react';
import TaskList from './components/TaskList';
import './App.css';
import TaskInput from './components/TaskInput';

const App: React.FC = () => {
    return (
        <div>
            <TaskInput />
            <TaskList />
        </div>
    )
}

export default App;