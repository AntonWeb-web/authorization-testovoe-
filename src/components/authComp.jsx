import AuthorizationForm from "./authorizationForm"
import ConfirmEmailForm from "./confirmEmailForm"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

const AuthComp = () => {
    const [isSendCode, setIsSendCode] = useState(false)
    const initialSend = useSelector(state => state.rootReducer.auth.authNotification.sendConfirmCode)

    useEffect(() => {
        setIsSendCode(initialSend)
    }, [initialSend])

    return (
        <div>
            {isSendCode ?
                <ConfirmEmailForm />
                :
                <AuthorizationForm />
            }
        </div>
    )
}

export default AuthComp