import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';

import { viewFormReducer } from './viewFormReducer'
import { authSuccessReducer } from './authSuccessReducer';
import { authFailureReducer } from './authFailureReducer';

export const initialState = {
    initialValues: {
        email: '',
        password: '',
        confirmPassword: '',
    },
}

const rootReducer = combineReducers({
    viewForm: viewFormReducer,
    authSuccess: authSuccessReducer,
    authFailure: authFailureReducer,
})

const store = configureStore({
    reducer: {
        rootReducer,
    }
}, composeWithDevTools(applyMiddleware(thunk)))

export default store