import axios from 'axios'

export const fetchRequestRegData = (props) => {
    const req = props.request
    const body = props.body
    return dispatch => {
        axios.post(req, body)
            .then (response => response.json)
            .then (console.log(response))
    }
}