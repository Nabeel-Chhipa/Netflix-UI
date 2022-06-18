import React, { useRef } from 'react';
import './SignUp.css';
import { auth } from '../firebase';


const SignUp = () => {

    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const register = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value,
        )
        .then((authUser) => { console.log(authUser) })
        .catch((error) => { alert(error.message) })
    }

    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then(authUser => console.log(authUser))
        .catch(error => console.log(error.message))

    }

    return (
        <div className='signUp'>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type='email' placeholder='Email' />
                <input ref={passwordRef} type='password' placeholder='Password' />
                <button type='submit' onClick={signIn}>Sign In</button>
                <h4>
                    <span className='signUp__gray'>New To Netflix? </span>
                    <span className='signUp__link' onClick={register}>Sign Up now.</span>
                </h4>
            </form>
        </div>
    )
}

export default SignUp