import { Title, Center } from '@mantine/core';
import { useSelector, } from "react-redux"

const ProfilePage = () => {
    const initialNameUser = useSelector(state => state.rootReducer.auth.initialValues.email)
    const nameUser = initialNameUser.split('@')[0] || ''

    return (
        <div>
            <Center style={{ marginTop: '20px' }}>
                <Title order={2} style={{ marginBottom: 15, marginTop: 20 }}>
                    Привет, {nameUser}!!!!!!!!
                </Title>
            </Center>
        </div>
    )
}

export default ProfilePage