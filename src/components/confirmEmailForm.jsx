import {
    Button, TextInput, PasswordInput,
    Paper, Group, Title, Notification,
    Loader, Center, Container, Text,
} from '@mantine/core';
import { useState } from 'react';


const ConfirmEmailForm = () => {
    const [confirmCode, setConfirmCode] = useState('')

    const handleConfirmCode = () => {
        
    }

    return (
        <div>
            <Container size='xs'>
                <Title order={2} style={{ marginBottom: 15 }}> Подтвердите email </Title>
                <TextInput
                    placeholder="Введите код подтверждения"
                    onChange={(event) => setConfirmCode(event.currentTarget.value)}
                    required
                />

                <Group position="apart" mt="md">
                    <Button onClick={() => handleConfirmCode()}>Подтвердить код</Button>
                    <Button variant="outline" onClick={() => {}}>
                        Повторить отправку кода
                    </Button>
                </Group>
            </Container>
        </div>
    )
}

export default ConfirmEmailForm