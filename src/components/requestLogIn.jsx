import axios from 'axios'
import { logInSuccesAction } from '../redux/logInSuccessAction'
import { logInFailureAction } from '../redux/logInFailureAction'

const requestLogIn = async (props) => {
    const request = 'http://20.205.178.13:8001/auth/login/'
    console.log('LogIn')
    const email = props.email
    const password = props.password
    console.log(email, password);

    const body = {
        "email": email,
        "password": password,
    }

    console.log('Начальный бади = ', body)

    return async dispatch => {
        axios.post(request, body)
            .then(response =>
                dispatch(logInSuccesAction(response.data))
            )
            .catch(error => {
                dispatch(logInFailureAction(error.response ? error.response.status : null))
            })
    }
}

export default requestLogIn