import { createSlice } from '@reduxjs/toolkit';

export const AdminInfo = createSlice({
    name: 'admin-info',
    initialState: {
        isLogin: localStorage.getItem('adminToken') !== null ? true : false
    },
    reducers: {
        AdminLoginStatusHandler: (state, action) => {
            state.isLogin = action.payload;
        }
    }
});

export const { AdminLoginStatusHandler } = AdminInfo.actions;
export default AdminInfo.reducer;
