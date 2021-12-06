import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./signin.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { googleSignInStart, emailSignInStart } from "../../reducers/user/user.actions";

const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const signIn = e => {
        e.preventDefault()
        dispatch(emailSignInStart(email, password))
    }

    const signInWithGoogle = () => {
        dispatch(googleSignInStart())
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with wour email and password</span>
            <form onSubmit={signIn}>
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
                    <CustomButton
                        type="button"
                        isGoogleSignIn 
                        onClick={signInWithGoogle}
                    >
                        Sign In With Google
                    </CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn