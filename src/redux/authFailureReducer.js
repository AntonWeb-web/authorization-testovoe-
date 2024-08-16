import { initialState } from "./store";

const AUTHORIZATION_FAILURE = 'AUTHORIZATION_FAILURE'
export const authFailureReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHORIZATION_FAILURE: 
            return state
        default:
            return state
    }
}