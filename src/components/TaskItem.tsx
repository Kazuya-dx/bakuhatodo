import React, { useState, useEffect, useRef } from 'react'
import Img from "../statics/explosion.gif";
import { Task } from '../Types'
import './TaskItem.scss'
import './Animation.scss'

// Redux関連のモジュール・ファイル
import { useDispatch } from 'react-redux'
import { doneTask, deleteTask } from '../modules/tasksModule'
import { CSSTransition } from 'react-transition-group'

// インターフェース
interface Props {
    task: Task
}

// カウントダウンを行うカスタムフック
function useCountDown(initialValue: number, task: Task): number {
    const dispatch = useDispatch();
    const [count, setCount] = useState(initialValue);
    const checkRef = useRef(false);

    useEffect(() => {
        if (count > -1 && !checkRef.current) {
            const timerId = setTimeout(() => {
                setCount(count => count - 1);
            }, 1000);
            return () => clearTimeout(timerId);
        }
    }, [count]);

    // チェック時の処理
    if (task.done && !checkRef.current) {
        checkRef.current = !checkRef.current;
    }
    // チェック外した時の処理
    else if (!task.done && checkRef.current) {
        checkRef.current = !checkRef.current;
        setTimeout(() => {
            setCount(count => count - 1);
        }, 1000);
    }

    // 制限時間に達した時の処理
    if (count === -1) {
        setTimeout(() => {
            dispatch(deleteTask(task));
            alert(task.title + 'が爆発しました');
        }, 1750)
    }

    return count;
}

const TaskItem: React.FC<Props> = ({ task }) => {
    // Actionを使用するために dispatch を定義
    const dispatch = useDispatch()
    const count: number = useCountDown(10, task);
    const [check, setCheck] = useState(false);

    useEffect(() => {
        setCheck(true);
    }, [check]);

    return count >= 0 ? (
        <CSSTransition
            in={check}
            classNames="fade"
            timeout={800}
            unmountOnExit
        >
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
        </CSSTransition>
    ) :
        <div className="wrap">
            <img src={Img} alt="" className="explosion" />
        </div>
}

export default TaskItem