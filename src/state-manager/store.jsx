import { configureStore } from '@reduxjs/toolkit';
import UserInfo from './reducer/userInfo';
import AdminInfo from './reducer/adminInfo';

export default configureStore({
    reducer: {
        UserInfo,
        AdminInfo
    }
});
