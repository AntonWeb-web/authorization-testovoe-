import { combineReducers, configureStore, applyMiddleware } from '@reduxjs/toolkit'
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';
import { authReducer } from './authReducer';

export const initialState = {
    initialValues: {
        email: '',
        password: '',
        confirmPassword: '',
    },
    authNotification: {
        visible: false,
        message: '',
        color: '',
        loading: false,
        sendConfirmCode: false,
    },
    confirmCodeNotification: {
        visible: false,
        message: '',
        color: '',
        loading: true,
    },
    viewProfilePage: {
        visible: false,
    },
}

const rootReducer = combineReducers({
    auth: authReducer,
})

const store = configureStore({
    reducer: {
        rootReducer,
    }
}, composeWithDevTools(applyMiddleware(thunk)))

export default store