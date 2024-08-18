import axios from "axios"
import { resendConfirmCodeAction } from "../redux/actions/resendConfirmCodeAction"

const resendConfirmCode = (props) => {
    const email = props.initialEmail.email
    const request = 'http://20.205.178.13:8001/registration/resend_code'

    const body = {
        'email': email
      }

    return async dispatch => {
        axios.post(request, body)
            .then(response => {
                dispatch(resendConfirmCodeAction(response.data))
            })
            .catch(error => {  })
    }
}

export default resendConfirmCode