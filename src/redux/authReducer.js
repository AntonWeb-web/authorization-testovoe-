import { initialState } from "./store"

const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAILURE = 'LOGIN_FAILURE'
const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS'
const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE'
const SUCCESS_CONFIRM_CODE = 'SUCCESS_CONFIRM_CODE'
const FAILURE_CONFIRM_CODE = 'FAILURE_CONFIRM_CODE'
const RESEND_CONFIRM_CODE = 'RESEND_CONFIRM_CODE'
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                initialValues: {
                    email: action.payload.email
                },
                viewProfilePage: { visible: true },
            }
        case LOGIN_FAILURE:
            return { ...state, authNotification: { visible: true, message: 'Ошибка при входе', color: '#ca4754' } }
        case REGISTRATION_SUCCESS:
            return {
                ...state,
                initialValues: {
                    email: action.payload.email
                },
                authNotification: {
                    visible: true,
                    message: 'Успешная регистрация',
                    color: '#bb9a1c',
                    sendConfirmCode: true,
                },
                confirmCodeNotification: {
                    visible: true,
                    message: 'На вашу почту был отправлен код подтверждения'
                },
            }
        case REGISTRATION_FAILURE:
            return { ...state, authNotification: { visible: true, message: 'Ошибка регистрации', color: '#ca4754' } }
        case SUCCESS_CONFIRM_CODE:
            return { ...state, viewProfilePage: { visible: true } }
        case FAILURE_CONFIRM_CODE:
            return { ...state, confirmCodeNotification: { sendConfirmCode: false } }
        case RESEND_CONFIRM_CODE:
            return {
                ...state,
                confirmCodeNotification: {
                    visible: true,
                    sendConfirmCode: true,
                    message: 'Новый код подтверждения отправлен',
                }
            }
        default:
            return state
    }
}