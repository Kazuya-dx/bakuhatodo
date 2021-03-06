import React from 'react';
import TaskItem from '../components/TaskItem';
import './TaskList.scss';

// Redux関連のライブラリ・ファイル
import { useSelector } from 'react-redux';
import { RootState } from '../rootReducer';

// コンポーネントは関数を変数として定義
const TaskList: React.FC = () => {
    const { tasks } = useSelector((state: RootState) => state.tasks);

    return (
        <div>
            {
                tasks.length <= 0 ? <div className="no-task">No Tasks</div> :
                    <ul>
                        {tasks.map(task => (
                            <TaskItem key={task.id} task={task} />
                        ))}
                    </ul>
            }
        </div>
    )
}

export default TaskList;