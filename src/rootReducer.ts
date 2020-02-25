import { combineReducers } from '@reduxjs/toolkit';
import tasksModule from './modules/tasksModule';

// 後ほど作成するReducerをcombineReducersに入れる
const rootReducer = combineReducers({
    // このtasksはコンポーネントで使用する共有のstate
    tasks: tasksModule.reducer
})

// ステートの型を指定するときに使用
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer