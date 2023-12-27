import React from "react";
import Logo from "./Logo";
import ActionPanel from "./ActionPanel";
import LoginWindow from "./LoginWindow";



class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="logo-panel-wrapper">
                    <Logo />
                    <ActionPanel />
                </div>
                <LoginWindow />
            </header>
        )
    }

}

export default Header
