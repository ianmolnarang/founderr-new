import {configureStore} from '@reduxjs/toolkit';
import AuthReducer from './slice/authSlice';
import CompleteInformation from './slice/completeInformation';
const store = configureStore({
  reducer: {
    auth: AuthReducer,
    completeInformation: CompleteInformation,
  },
});

export default store;
