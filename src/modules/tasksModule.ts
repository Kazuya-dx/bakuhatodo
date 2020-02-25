import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../Types';

type State = {
    count: number
    tasks: Task[]
}

const initialState: State = {
    count: 2,
    tasks: []
}

// createCliceで State, Reducer, Action を一気に作ることができる。
const tasksModule = createSlice({
    // name: このcreateSliceを識別するための名前
    name: 'tasks',
    // initialState: 初期State
    initialState,
    // reducers: Stateを変更する為の処理
    reducers: {
        addTask(state: State, action: PayloadAction<string>) {
            state.count++

            // １日後のミリ秒を記述 ( + 86400000 に設定することで１日後に爆発)
            let limit = Date.now() + 10000;

            const newTask: Task = {
                id: state.count,
                title: action.payload,
                done: false,
                limit: limit,
            }

            state.tasks = [newTask, ...state.tasks]
        },
        doneTask(state: State, action: PayloadAction<Task>) {
            const task = state.tasks.find(t => t.id === action.payload.id)
            if (task) {
                task.done = !task.done
            }
        },
        deleteTask(state: State, action: PayloadAction<Task>) {
            state.tasks = state.tasks.filter(t =>
                t.id !== action.payload.id
            )
        },
        explodeTask(state: State, action: PayloadAction<Task>) {
            state.tasks = state.tasks.filter(t =>
                t.limit > Date.now()
            )
        }
    }
})

/*
他のコンポーネントで使いやすいように tasksModule.actions で export する。
アクションを使用する時は addTask(), doneTask(), deleteTask() で使用可能。
*/
export const {
    addTask, doneTask, deleteTask, explodeTask,
} = tasksModule.actions

export default tasksModule