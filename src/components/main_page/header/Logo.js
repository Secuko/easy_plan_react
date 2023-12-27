import React from "react";
import logo from "../../../image/logo.jpg";


class Logo extends React.Component {
    render() {
        return (
            <div className="logo-wrapper">
                <img className="logo" src={logo} alt="easy plan" />
            </div>
        )
    }

}

export default Logo