import React from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";
import netflixLogo from "../images/netflixLogo.png"

export default function LoginScreen() {
    const [signIn, setSignIn] = React.useState(false);

    return (
        <div className="loginScreen">
            <div className="loginScrreenBg">
                <img className="loginScreenLogo"
                    alt="netflixLogo"
                    src={netflixLogo} />
                <button onClick={() => setSignIn(true)} className="loginScreenButton">Sign In</button>
                <div className="loginScreenGradient"></div>
            </div>

            <div className="loginScreenBody">
                {signIn ? (
                    <SignUpScreen />
                ) : (
                    <>
                        <h1>Unlimited films, TV programs and more.</h1>
                        <h2>Watch anywhere. Cancle at any time.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                        <div className="loginScreenInput">
                            <form>
                                <input type="email" placeholder="Email Address" />
                                <button onClick={() => setSignIn(true)} className="getStartedButton">GET STARTED</button>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}