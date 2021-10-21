import axios from 'axios'
import React, {useRef, useContext} from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import './login.css'

const Login = () => {

    const userRef = useRef()
    const passwordRef = useRef()
    const { dispath, isFetching } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispath({type: "LOGIN_START"})
        try{
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value
            })
        } catch(err) {

        }
    }

    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" className="loginInput" placeholder="Enter username email"
                ref={useRef}/>
                <label>Password</label>
                <input type="password" className="loginInput" placeholder="Enter your password"
                ref={passwordRef}/>
            <button className="loginBtn" type="submit">Login</button>
            </form>
            <button className="loginRegisterBtn">
                <Link to="/register" className="link">Register</Link>
            </button>
        </div>
    )
}

export default Login
