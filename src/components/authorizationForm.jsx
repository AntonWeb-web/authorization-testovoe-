import { Button, TextInput, PasswordInput, Paper, Group, Title, Notification } from '@mantine/core';
import { useForm } from '@mantine/form';
import axios from 'axios'
import { useState, useEffect } from 'react';
import style from '.././App.module.css'
import { useSelector, useDispatch, } from 'react-redux';
import requestRegistration from './requestRegistration';
import requestLogIn from './requestLogIn';

const AuthorizationForm = () => {
    const dispatch = useDispatch()
    const stateInitialValues = useSelector(state => state.rootReducer.viewForm.initialValues)

    const [failuerNotification, setFailureNotification] = useState({ visible: false, message: ''})

    const [isLogin, setIsLogin] = useState(false);
    const [responseRegistration, setResponseRegistration] = useState(null)
    const [responseLogIn, setResponseLogIn] = useState(null)


    const form = useForm({
        initialValues: stateInitialValues,

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Неверный адрес электронной почты'),
            password: (value) => (value.length >= 8 ? null : 'Пароль должен содержать не менее 8 символов'),
            confirmPassword: (value, values) => (value === values.password ? null : 'Пароли не совпадают'),
        },
    });

    const handleLogin = (values) => {
        requestLogIn(values)
    }

    const handleRegistration = async (values) => {
        const req = await requestRegistration(values)
        dispatch(req)
    }

    const handleSubmit = (values) => {
        console.log(isLogin)
        isLogin ? handleLogin(values) : handleRegistration(values)
    };

    return (
        <div>
            <Paper padding="md" style={{ marginTop: 60 }}>
                <Title order={2} align="center">{isLogin ? 'Авторизация' : 'Регистрация'}</Title>
                <form onSubmit={form.onSubmit(handleSubmit)} className={style.regForm}>
                    <TextInput
                        label="Email"
                        placeholder="Ваш email"
                        {...form.getInputProps('email')}
                    />

                    <PasswordInput
                        label="Пароль"
                        placeholder="Ваш пароль"
                        {...form.getInputProps('password')}
                    />

                    {isLogin ? null :
                        <PasswordInput
                            label="Подтвердите пароль"
                            placeholder="Подтвердите ваш пароль"
                            {...form.getInputProps('confirmPassword')}
                        />
                    }

                    <Group position="apart" mt="md">
                        <Button type="submit" className={style.btnReg}> {isLogin ? 'Войти' : 'Регистрация'} </Button>
                        <Button variant="outline" onClick={() => setIsLogin(!isLogin)}>
                            {isLogin ? 'Нет аккаунта? Зарегистрируйтесь' : 'Есть аккаунт? Войдите'}
                        </Button>
                    </Group>
                </form>
            </Paper>
        </div>
    )
}

export default AuthorizationForm