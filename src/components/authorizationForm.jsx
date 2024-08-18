import {
    Button, TextInput, PasswordInput,
    Paper, Group, Title, Notification,
    Loader, Center
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState, useEffect } from 'react';
import style from '.././App.module.css'
import { useSelector, useDispatch, } from 'react-redux';
import requestRegistration from './requestRegistration';
import requestLogIn from './requestLogIn';

const AuthorizationForm = () => {
    const dispatch = useDispatch()
    const stateInitialValues = useSelector(state => state.rootReducer.auth.initialValues)
    const initialNotification = useSelector(state => state.rootReducer.auth.authNotification)
    const [notification, setNotification] = useState(initialNotification)

    const [isLogin, setIsLogin] = useState(false);


    const form = useForm({
        initialValues: stateInitialValues,

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Неверный адрес электронной почты'),
            password: (value) => (value.length >= 8 ? null : 'Пароль должен содержать не менее 8 символов'),
            confirmPassword: (value, values) => { isLogin ? null : (value === values.password ? null : 'Пароли не совпадают') },
        },
    });

    const handleLogin = async (values) => {
        const req = await requestLogIn(values)
        dispatch(req)
    }

    const handleRegistration = async (values) => {
        const req = await requestRegistration(values)
        dispatch(req)
    }

    const handleSubmit = (values) => {
        setNotification({ loading: true })
        isLogin ? handleLogin(values) : handleRegistration(values)
    };

    useEffect(() => {
        setNotification(initialNotification)
        setTimeout(() => {
            setNotification({ visible: false, message: '' })
        }, 5000)
    }, [initialNotification])

    return (
        <div>
            {notification.visible ? (
                <Center style={{ marginTop: '20px' }}>
                    <Notification
                        onClose={() => setNotification({ visible: false, message: '' })}
                        style={{ width: 400 }}
                        color={notification.color}
                        success='true'
                    >
                        {notification.message}
                    </Notification>
                </Center>
            ) : (notification.loading && (<Center style={{ marginTop: '20px' }}><Loader size='xs' variant='oval' /></Center>))}

            <Paper padding="md" style={{ marginTop: 30 }}>
                <Title order={2} align="center" style={{ marginBottom: '20px' }}>{isLogin ? 'Авторизация' : 'Регистрация'}</Title>
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