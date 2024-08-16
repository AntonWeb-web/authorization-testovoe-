const AUTHORIZATION_FAILURE = 'AUTHORIZATION_FAILURE'
export const authFailureAction = (payload) => ({
    type: AUTHORIZATION_FAILURE,
    payload
})