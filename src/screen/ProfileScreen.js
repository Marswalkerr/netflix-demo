import React from "react";
import "./ProfileScreeen.css";
import Nav from "../Nav";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom";

export default function ProfileScreen(){

    const user = useSelector(selectUser);
    const navigate = useNavigate();

    return(
        <div className="profileScreen">
            <Nav />
            <div className="profileScreenBody">
                <h1>Edit Profile</h1>
                <div className="profileSCreenInfo">
                    <img
                        className="profileScreenLogo"
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt="avataarLogo"
                    />

                    <div className="profileScreenDetails">
                        <h2>{user.email}</h2>
                        <div className="profileScreenPlans">
                            <h3>Plans</h3>
                            <button onClick={() => {
                                auth.signOut();
                                navigate("/login");
                            }} className="profileScreenSignOut">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}