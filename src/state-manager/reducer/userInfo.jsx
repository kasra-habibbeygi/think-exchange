import { createSlice } from '@reduxjs/toolkit';

export const UserInfo = createSlice({
    name: 'buy-crypto-info',
    initialState: {
        isLogin: localStorage.getItem('userToken') !== null ? true : false
    },
    reducers: {
        LoginStatusHandler: (state, action) => {
            state.isLogin = action.payload;
        }
    }
});

export const { LoginStatusHandler } = UserInfo.actions;
export default UserInfo.reducer;
