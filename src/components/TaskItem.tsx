import React, { useState, useEffect, useRef } from 'react'
import { Task } from '../Types'
import './TaskItem.scss'

// Redux関連のモジュール・ファイル
import { useDispatch } from 'react-redux'
import { doneTask, deleteTask, explodeTask } from '../modules/tasksModule'

type Props = {
    task: Task
}

// カウントダウンを行うカスタムフック
function useCountDown(initialValue: number, task: Task): number {
    const dispatch = useDispatch();
    const [count, setCount] = useState(initialValue);
    const checkRef = useRef(false);

    useEffect(() => {
        if (count > -1) {
            const timerId = setTimeout(() => {
                setCount(count => count - 1);
            }, 1000);
            return () => clearTimeout(timerId);
        }
    }, [count]);

    if (count === -1) {
        alert('さようなら、' + task.title);
        dispatch(explodeTask(task));
    }
    if (task.done && !checkRef.current) {
        setCount(-2);
        checkRef.current = true;
    }

    return count;
}

const TaskItem: React.FC<Props> = ({ task }) => {
    // Actionを使用するために dispatch を定義
    const dispatch = useDispatch()

    const count: number = useCountDown(10, task);

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
                {!task.done ? <p>爆発まで 残り {count} 秒</p> : <p>タスク完了</p>}
            </label>
            <button onClick={() => dispatch(deleteTask(task))}>削除</button>
        </li>
    )
}

export default TaskItem