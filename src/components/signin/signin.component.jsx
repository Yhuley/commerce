import React, { useState } from "react";
import "./signin.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = e => {
        e.preventDefault()

        setEmail("")
        setPassword("")
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
                <CustomButton type="submit">Sign In</CustomButton>
            </form>
        </div>
    )
}

export default SignIn