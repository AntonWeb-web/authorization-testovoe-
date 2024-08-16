import axios from 'axios'

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

    console.log(body)


    try {
        const response = await axios.post(request, body);
        console.log('Registration successful', response.data);
        console.log('Data = ', response.data)

        return response.data
        axios.post(request, body)
            .then (response => console.log(response.data))
    
    
    } catch (error) {
        console.log(error);
        console.error('Ответ сервера:', error.response.data);
        console.error('Статус код:', error.response.status);

        return error.response.status
    }

}

export default requestRegistration