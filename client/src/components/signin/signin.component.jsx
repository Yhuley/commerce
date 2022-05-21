import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import "./signin.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { googleSignInStart, emailSignInStart } from "../../reducers/user/user.actions";

const SignIn = ({ setIsRegistred }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const signIn = e => {
        e.preventDefault()
        dispatch(emailSignInStart(email, password))
        navigate('/')
    }

    const signInWithGoogle = () => {
        dispatch(googleSignInStart())
        navigate('/')
    }

    return (
        <div className="sign-in">
            <h2>Sign in with wour email and password</h2>
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
            <span className="mistake" onClick={() => setIsRegistred(false)}>I don`t  have an account</span>
        </div>
    )
}

export default SignIn