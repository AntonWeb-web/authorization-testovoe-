import { initialState } from "./store"

const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS'
const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE'
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTRATION_SUCCESS:
            return {...state, authNotification: {visible: true, message: 'Успешная регистрация', color: '#bb9a1c'}}
        case REGISTRATION_FAILURE:
            return {...state, authNotification: {visible: true, message: 'Ошибка регистрации', color: '#ca4754'}}
        default:
            return state
    }
}