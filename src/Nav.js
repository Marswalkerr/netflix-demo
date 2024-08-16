import React from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

export default function Nav(){

    const [show, handleShow] = React.useState(false);
    const navigate = useNavigate();

    const transitionNavBar = () => {
        if(window.scrollY > 100){
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    React.useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, [])

    return(
        <div className={`nav ${show && 'navBlack'}`}>
            <div className="navContents">
                <img
                onClick={() => navigate('/')}
                src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" alt="netflixLogo" className="netflixLogo"/>

                <img
                onClick={() => navigate('/profile')}
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avataarLogo" className="avataarLogo"/>
            </div>
        </div>
    )
}