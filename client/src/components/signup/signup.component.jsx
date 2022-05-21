import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import "./signup.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../reducers/user/user.actions";

const SignUp = ({ setIsRegistred }) => {
    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()

        if (password !== confirmPassword) {
            alert("passwords don`t match")
            return
        }

        dispatch(signUpStart({ displayName, email, password }))
        navigate('/')
    }

    return (
        <div className="sign-up">
            <h2 className="title">Sign up with your email and password</h2>
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
                    label="confirm&nbsp;password"
                />
                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
            <span className="mistake" onClick={() => setIsRegistred(true)}>I already have an account</span>
        </div>
    )
}

export default SignUp