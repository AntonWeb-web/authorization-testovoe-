import axios from 'axios'
import { authSuccessAction } from '../redux/authSuccessAction'
import { authFailureAction } from '../redux/authFailureAction'

const requestRegistration = async (props) => {
    const request = 'http://20.205.178.13:8001/registration/'
    console.log('Registration')
    const email = props.email
    const password = props.password
    const confirmPassword = props.confirmPassword
    //console.log(email, password);

    const body = {
        "email": email,
        "password": password,
        "repeat_password": confirmPassword
    }

    console.log('Начальный бади = ', body)

    return async dispatch => {
        axios.post(request, body)
            .then (response =>
                dispatch(authSuccessAction(response))
            )
            .catch (error => {
                dispatch(authFailureAction(error.response.status))
            })
    }
}

export default requestRegistration