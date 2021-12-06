import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./signin-and-signup.styles.scss";
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";

const SignInAndSignUpPage = () => {
    const { currentUser } = useSelector(state => state.userReducer)
    return !currentUser ? (
        <div className="sign-in-and-sign-up">
            <SignIn/>
            <SignUp/>
        </div>
    ) : (
        <Navigate to="/"/>
    )
}

export default SignInAndSignUpPage;