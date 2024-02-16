import React from "react";
import axios from 'axios'

const AuthContext = React.createContext()

const serverUrl = 'http://localhost:5000/api'

export const AuthContextProvider = ({children}) => {

    const [email, setEmail] = React.useState(localStorage.getItem('email') || '')

    const [authError, setAuthError] = React.useState({
        error: false,
        message: ''
    })

    const Logout = () => {
        localStorage.removeItem('email')
        localStorage.removeItem('token')
        window.location.replace('/login')
    }

    const Login = async(email, password) => {
        try {
            setEmail(email)
            const res = await axios.post(`${serverUrl}/login`, {email, password})
            if(res.data.success){
                setAuthError({error: false, message: ''})
                localStorage.setItem('email', email)
                localStorage.setItem('token', res.data.token)
                console.log('login success')
                window.location.replace('/')
            }
        } catch (error) {
            console.log(error.response)
            setAuthError({error: true, message: error.response.data.message})
        }
    }

    const Signup = async(email, password) => {
        try {
            console.log(email, password)
            setEmail(email)
            localStorage.setItem('email', email)
            const res = await axios.post(`${serverUrl}/signup`, {email, password})
            if(res.data.success){
                const code = res.data.code
                sendEmail(email, code)
                setAuthError({error: false, message: ''})
                console.log('pass to verification')
                window.location.replace('/verify')
            }else{
                localStorage.removeItem('email')
                setAuthError({error: true, message: error.response.data.message})
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    
    return(
        <AuthContext.Provider value={{
            email,
            authError,
            Login,
            Logout,
            Signup
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => React.useContext(AuthContext)