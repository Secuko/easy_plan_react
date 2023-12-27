import React from "react";
import { Link } from 'react-router-dom';
import { BiSolidUserCircle } from 'react-icons/bi';


class LoginWindow extends React.Component {
    state = {}
    render() {
        return (
            <div className="login-icon">
                <Link to="login">
                    <BiSolidUserCircle size={67} color="black"/>
                </Link>
            </div>
        );
    }
}

export default LoginWindow;