import { initialState } from "./store"

const AUTHORIZATION_SUCCESS = 'AUTHORIZATION_SUCCESS'
export const authSuccessReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHORIZATION_SUCCESS:
            return console.log('Актион = ', action)
        default:
            return state
    }
}