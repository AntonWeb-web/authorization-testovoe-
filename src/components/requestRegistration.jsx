import axios from 'axios'
import { registrationSuccessAction } from '../redux/registrationSuccessAction'
import { registrationFailureAction } from '../redux/registrationFailureAction'

const requestRegistration = async (props) => {
    const request = 'http://20.205.178.13:8001/registration/'
    const email = props.email
    const password = props.password
    const confirmPassword = props.confirmPassword


    const body = {
        "email": email,
        "password": password,
        "repeat_password": confirmPassword
    }

    return async dispatch => {
        axios.post(request, body)
            .then (response =>
                dispatch(registrationSuccessAction({ data: response.data, email: body.email}))
            )
            .catch (error => {
                dispatch(registrationFailureAction(error.response ? error.response.status : null))
            })
    }
}

export default requestRegistration