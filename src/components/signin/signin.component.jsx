import React, { useState } from "react";
import "./signin.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth } from "../../firebase/firebase.utils";
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";


const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async e => {
        e.preventDefault()

        try {
            await signInWithEmailAndPassword(auth, email, password)
            setEmail("")
            setPassword("")
        } catch (error) {
            console.log(error)
        }
        
    }

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider()
        try {
            await signInWithPopup(auth, provider)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with wour email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    name="email"
                    value={email}
                    type="email"
                    handleChange={e => setEmail(e.target.value)}
                    required
                    label="email"
                />
                <FormInput 
                    name="password"
                    value={password}
                    type="password"
                    handleChange={e => setPassword(e.target.value)}
                    required
                    label="password"
                />
                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton isGoogleSignIn onClick={signInWithGoogle}>Sign In With Google</CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn