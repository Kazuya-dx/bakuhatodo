import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../Types';

interface State {
    count: number
    tasks: Task[]
}

const initialState: State = {
    count: 0,
    tasks: []
}

// createCliceで State, Reducer, ActionCreator を一気に作ることができる。
const tasksModule = createSlice({
    // name: このcreateSliceを識別するための名前
    name: 'tasks',
    // initialState: 初期State
    initialState,
    // reducers: Stateを変更する為の処理
    reducers: {
        addTask(state: State, action: PayloadAction<string>) {
            state.count++

            const newTask: Task = {
                id: state.count,
                title: action.payload,
                done: false,
            }

            state.tasks = [newTask, ...state.tasks]
        },
        doneTask(state: State, action: PayloadAction<Task>) {
            const task = state.tasks.find(t => t.id === action.payload.id)
            if (task) {
                task.done = !task.done;
            }
        },
        deleteTask(state: State, action: PayloadAction<Task>) {
            state.tasks = state.tasks.filter(t =>
                t.id !== action.payload.id
            )
        },
    }
})

/*
他のコンポーネントで使いやすいように tasksModule.actions で export する。
ActionCreatorを使用する時は addTask(), doneTask(), deleteTask() で使用可能。
*/
export const {
    addTask, doneTask, deleteTask,
} = tasksModule.actions

export default tasksModule