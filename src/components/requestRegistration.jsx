import axios from 'axios'
import { registrationSuccessAction } from '../redux/registrationSuccessAction'
import { registrationFailureAction } from '../redux/registrationFailureAction'

const requestRegistration = async (props) => {
    const request = 'http://20.205.178.13:8001/registration/'
    console.log('Registration')
    const email = props.email
    const password = props.password
    const confirmPassword = props.confirmPassword


    const body = {
        "email": email,
        "password": password,
        "repeat_password": confirmPassword
    }

    console.log('Начальный бади = ', body)

    return async dispatch => {
        axios.post(request, body)
            .then (response =>
                dispatch(registrationSuccessAction(response.data))
            )
            .catch (error => {
                dispatch(registrationFailureAction(error.response ? error.response.status : null))
            })
    }
}

export default requestRegistration