import React, { useState } from 'react';

// Redux関連のモジュール・ファイル
import { useDispatch } from 'react-redux';
import { addTask } from '../modules/tasksModule';

const TaskInput: React.FC = () => {
    // Actionを使用するための dispatch を定義
    const dispatch = useDispatch()

    const [inputTitle, setInputTitle] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputTitle(e.target.value)
    }

    const handleSubmit = () => {
        if (inputTitle !== '') {
            dispatch(addTask(inputTitle))
            setInputTitle('')
        } else {
            alert('TODOが未記入です');
        }
    }

    return (
        <div>
            <div className="inner">
                <input
                    type="text"
                    value={inputTitle}
                    onChange={handleInputChange}
                    placeholder="TODOを入力してください。"
                />
                <button onClick={handleSubmit}>追加</button>
            </div>
        </div>
    )
}

export default TaskInput