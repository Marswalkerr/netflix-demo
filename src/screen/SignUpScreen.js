import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SignUpScreen.css";
import { useNavigate } from "react-router-dom";

export default function SignUpScreen() {
    const navigate = useNavigate();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch((error) => {
            alert(error.message);
        });
    };

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
            navigate("/"); // Navigate after successful sign-in
        }).catch((error) => {
            alert(error.message);
        });
    };

    return (
        <div className="signUpScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="email" />
                <input ref={passwordRef} placeholder="Password" type="password" />
                <button type="submit" onClick={signIn}>Submit</button>
                <h4>
                    <span className="grayColor">New to Netflix? </span>
                    <span className="signUpScreenLink" onClick={register}>Sign Up now.</span>
                </h4>
            </form>
        </div>
    );
}
