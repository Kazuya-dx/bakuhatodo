import React from 'react';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';
import Header from './components/Header';
import './App.css';

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <TaskInput />
            <TaskList />
        </div>
    )
}

export default App;