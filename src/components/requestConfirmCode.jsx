import axios from "axios";
import { successConfirmCodeAction } from "../redux/successConfirmCodeAction";
import { failureConfirmCodeAction } from "../redux/failureConfirmCodeAction";


const requestConfirmCode = async (props) => {
    const confirmCode = props.confirmCode
    const url = 'http://20.205.178.13:8001/registration/'
    const request = url + confirmCode

    return async dispatch => {
        axios.patch(request, )
            .then(response => {
                dispatch(successConfirmCodeAction(response.data))
            })
            .catch(error => {
                dispatch(failureConfirmCodeAction(error.response ? error.response.status : null))
            })
    }
}

export default requestConfirmCode