
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/user'

function Login() {


    const [userName, setUserName] = useState("")
    const [userAge, setUserAge] = useState("")
    const [userEmail, setUserEmail] = useState("")


    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => {
                dispatch(login({ name: userName, age: userAge, email: userEmail }))
            }}>Login</button>


            <input type='name'

                value={userName}
                onChange={(e) => {
                    setUserName(e.target.value)
                }}
            />


            <input type='name'

                value={userAge}
                onChange={(e) => {
                    setUserAge(e.target.value)
                }}
            />


            <input type='name'

                value={userEmail}
                onChange={(e) => {
                    setUserEmail(e.target.value)
                }}
            />

        </div>



    )
}

export default Login