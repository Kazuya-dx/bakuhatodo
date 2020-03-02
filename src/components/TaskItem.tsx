import React, { useState, useEffect } from 'react'
import { Task } from '../Types'

// Redux関連のモジュール・ファイル
import { useDispatch } from 'react-redux'
import { doneTask, deleteTask } from '../modules/tasksModule'

type Props = {
    task: Task
}

// カウントダウンを行うカスタムフック
function useCountDown(initialValue: number) {
    const [count, setCount] = useState(initialValue);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setCount(count => count - 1);
        }, 1000);
        return () => clearTimeout(timerId);
    }, [count]);

    return count;
}

const TaskItem: React.FC<Props> = ({ task }) => {
    // Actionを使用するために dispatch を定義
    const dispatch = useDispatch()

    const count: number = useCountDown(10);

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
                <p>爆発まで 残り {count} 秒</p>
            </label>
            <button onClick={() => dispatch(deleteTask(task))}>削除</button>
        </li>
    )
}

export default TaskItem