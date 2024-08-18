import axios from 'axios'
import { logInSuccesAction } from '../redux/actions/logInSuccessAction'
import { logInFailureAction } from '../redux/actions/logInFailureAction'

const requestLogIn = async (props) => {
    const request = 'http://20.205.178.13:8001/auth/login/'
    const email = props.email
    const password = props.password

    const body = {
        "email": email,
        "password": password,
    }

    return async dispatch => {
        axios.post(request, body)
            .then(response =>
                dispatch(logInSuccesAction({ data: response.data, email: body.email }))
            )
            .catch(error => {
                dispatch(logInFailureAction(error.response ? error.response.status : null))
            })
    }
}

export default requestLogIn