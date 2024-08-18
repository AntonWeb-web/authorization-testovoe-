import {
    Button, TextInput, Group, 
    Title, Notification, Loader, 
    Center, Container,
} from '@mantine/core';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import requestConfirmCode from './requestConfirmCode';
import resendConfirmCode from './resendConfirmCode';


const ConfirmEmailForm = () => {
    const dispatch = useDispatch()

    const initialNotification = useSelector(state => state.rootReducer.auth.confirmCodeNotification)
    const initialEmail = useSelector(state => state.rootReducer.auth.initialValues)
    const [notification, setNotification] = useState(initialNotification)

    const [confirmCode, setConfirmCode] = useState('')

    const handleConfirmCode = async (confirmCode) => {
        const req = await requestConfirmCode({ confirmCode })
        dispatch(req)
    }

    const handleResendConfirmCode = async (initialEmail) => {
        setNotification({ loading: true })
        const req = await resendConfirmCode({initialEmail})
        dispatch(req)
    }

    useEffect(() => {
        setNotification(initialNotification)
        setTimeout(() => {
            setNotification({ visible: false, message: '' })
        }, 2500)
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

            <Container size='xs'>
                <Title order={2} style={{ marginBottom: 15, marginTop: 20 }}> Подтвердите email </Title>
                <TextInput
                    placeholder="Введите код подтверждения"
                    onChange={(event) => setConfirmCode(event.currentTarget.value)}
                    required
                />

                <Group position="apart" mt="md">
                    <Button onClick={() => handleConfirmCode(confirmCode)}>Подтвердить код</Button>
                    <Button variant="outline" onClick={() => handleResendConfirmCode(initialEmail)}>
                        Повторить отправку кода
                    </Button>
                </Group>
            </Container>
        </div>
    )
}

export default ConfirmEmailForm