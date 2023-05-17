import { configureStore } from '@reduxjs/toolkit';
import UserInfo from './reducer/userInfo';

export default configureStore({
    reducer: {
        UserInfo
    }
});
