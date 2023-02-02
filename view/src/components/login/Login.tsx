import React, { useState } from 'react'
// import { login, signUp } from '../../redux/user/userSlice'
import { loginAPI, signupAPI } from '../../redux/api/API'
const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [createUser, setCreateUser] = useState(true)
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.placeholder === "username") {
            setUsername(e.target.value)
        } else {
            setPassword(e.target.value)
        }
    }
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const newUser = {username, password}
        if(!createUser) {
            // dispatch(login(newUser))
            loginAPI(newUser).then(res => 
                console.log(res)
                )
        } else {
            signupAPI(newUser).then(res => 
                console.log(res)
                )
            // dispatch(signUp(newUser))
        }
    }
    const handleSwap = () => {
        setCreateUser(!createUser)
    }
  return (
    <>
    <form>
        <input onChange={handleChange} type="text" placeholder='username' />
        <input onChange={handleChange} type="password" placeholder='password' />
        <button onClick={handleSubmit}>{createUser ? "Create Profile" : "Login"}</button>
    </form>
    <p> {createUser ? "Have an account?" : "New Here?"} 
    <span onClick={handleSwap} className='highlight'>{createUser ? "Sign in here" : "Create an account"}</span> </p>
    </>
  )
}

export default Login