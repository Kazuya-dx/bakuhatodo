import React, { useEffect } from 'react';
import TaskItem from '../components/TaskItem';

// Redux関連のライブラリ・ファイル
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../rootReducer';
import { explodeTask } from '../modules/tasksModule'

// コンポーネントは関数を変数として定義
const TaskList: React.FC = () => {
    const dispatch = useDispatch();

    const { tasks } = useSelector((state: RootState) => state.tasks);

    useEffect(() => {
        tasks.map(task => {
            if (task.limit <= Date.now()) {
                alert('さようなら、' + task.title);
                dispatch(explodeTask(task));
            }
            return 0;
        })
    });

    return (
        <div>
            {
                tasks.length <= 0 ? '登録されたTODOはありません。' :
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