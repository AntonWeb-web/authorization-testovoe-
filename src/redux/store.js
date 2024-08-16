import { combineReducers, configureStore } from '@reduxjs/toolkit'
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
})

export default store