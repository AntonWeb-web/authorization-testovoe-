import { initialState } from "./store";

const VIEW_FORM = 'VIEW_FORM'
export const viewFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case VIEW_FORM:
            return state
        default: 
            return state
    }
}