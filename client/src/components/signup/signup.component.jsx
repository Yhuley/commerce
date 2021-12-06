import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./signup.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../reducers/user/user.actions";

const SignUp = () => {
    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = async e => {
        e.preventDefault()

        if (password !== confirmPassword) {
            alert("passwords don`t match")
            return
        }

        dispatch(signUpStart({ displayName, email, password }))
    }

    return (
        <div className="sign-up">
            <h2>I don`t  have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name="displayName" 
                    value={displayName}
                    type="text"
                    handleChange={e => setDisplayName(e.target.value)}
                    required
                    label="name"
                />
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
                <FormInput
                    name="confirmPassword"
                    value={confirmPassword}
                    type="password"
                    handleChange={e => setConfirmPassword(e.target.value)}
                    required
                    label="confirm password"
                />
                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </div>
    )
}

export default SignUp