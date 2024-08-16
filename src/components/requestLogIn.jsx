import axios from 'axios'

const requestLogIn = async (props) => {
    console.log('Login')
    const email = props.email
    const password = props.password
    console.log(email, password);

    const body = {
        "email": email,
        "password": password,
    }

    console.log(body)

    try {
        const response = await axios.post('http://20.205.178.13:8001/registration/', body);
        console.log('Registration successful', response.data);
        console.log('Data = ', response.data)

    } catch (error) {
        console.log(error);
        console.error('Ответ сервера:', error.response.data);
        console.error('Статус код:', error.response.status);
    }

    return null
}

export default requestLogIn