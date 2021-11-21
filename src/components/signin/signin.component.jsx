import React, { useState } from "react";
import "./signin.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth } from "../../firebase/firebase.utils";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = e => {
        e.preventDefault()

        setEmail("")
        setPassword("")
    }

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
        .then(re => console.log(re))
        .catch(e => console.log(e))
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with wour email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
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