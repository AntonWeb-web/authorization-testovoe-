import style from './App.module.css'
import { useForm } from '@mantine/form';
import { Button, TextInput, PasswordInput, Paper, Group, Title } from '@mantine/core';
import axios from 'axios'
import { useState } from 'react';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Неверный адрес электронной почты'),
      password: (value) => (value.length >= 8 ? null : 'Пароль должен содержать не менее 8 символов'),
      confirmPassword: (value, values) => (value === values.password ? null : 'Пароли не совпадают'),
    },
  });

  const handleLogin = async (values) => {
    console.log('Login')
    const email = values.email
    const password = values.password
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
  }

  const handleRegistration = async (values) => {
    console.log('Registration')
    const email = values.email
    const password = values.password
    const confirmPassword = values.confirmPassword
    console.log(email, password);

    const body = {
      "email": email,
      "password": password,
      "repeat_password": confirmPassword
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
  }

  const handleSubmit = (values) => {
    console.log(isLogin)
    isLogin ? handleLogin(values) : handleRegistration(values)
  };

  return (
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
  );
}

export default App