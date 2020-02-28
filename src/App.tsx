import React from 'react';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';
import Header from './components/Header';
import './App.scss';

const App: React.FC = () => {
    return (
        <div className="wrapper">
            <Header />
            <TaskInput />
            <div className="container">
                <TaskList />
            </div>
        </div>
    )
}

export default App;