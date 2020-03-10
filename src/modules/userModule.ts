import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    name: string
    address: string
    password: string
    isLoggedIn: boolean
}

const initialState: User = {
    name: "",
    address: "",
    password: "",
    isLoggedIn: false
}

const userModule = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setGuest(state: User, action: PayloadAction) {
            state.name = "ゲスト";
            state.isLoggedIn = true;
        },
        logOut(state: User, action: PayloadAction<User>) {
            state.name = "";
            state.address = "";
            state.password = "";
            state.isLoggedIn = false;
        }
    }
})

export const { setGuest, logOut } = userModule.actions;

export default userModule;