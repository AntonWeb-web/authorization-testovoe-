import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';

import { viewFormReducer } from './viewFormReducer'

export const initialState = {
    initialValues: {
        email: '',
        password: '',
        confirmPassword: '',
    },
}

const rootReducer = combineReducers({
    viewForm: viewFormReducer,
})

const store = configureStore({
    reducer: {
        rootReducer,
    }
}, composeWithDevTools(applyMiddleware(thunk)))

export default store