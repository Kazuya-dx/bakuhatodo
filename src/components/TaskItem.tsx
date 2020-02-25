import React from 'react'
import { Task } from '../Types'

// Redux関連のモジュール・ファイル
import { useDispatch } from 'react-redux'
import { doneTask, deleteTask, explodeTask } from '../modules/tasksModule'

type Props = {
    task: Task
}

const TaskItem: React.FC<Props> = ({ task }) => {
    // Actionを使用するために dispatch を定義
    const dispatch = useDispatch()

    return (
        <li className={task.done ? 'done' : ''}>
            <label>
                <input
                    type="checkbox"
                    // Actionを使用する時は dispatch(アクション) のようにすること
                    onClick={() => dispatch(doneTask(task))}
                    defaultChecked={task.done}
                />
                <span>{task.title}</span>
                <p>爆発する日時: {task.limit}</p>
            </label>
            <button onClick={() => dispatch(deleteTask(task))}>削除</button>
            <button onClick={() => {
                if (task.limit > Date.now()) {
                    alert('まだ爆発しません');
                } else {
                    alert('さようなら、' + task.title);
                    dispatch(explodeTask(task));
                }
            }}>爆発</button>
            <p> </p>
        </li>
    )
}

export default TaskItem