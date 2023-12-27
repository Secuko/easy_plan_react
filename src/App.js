import React from "react";
import MainPage from "./components/main_page/MainPage";
import { Route, Routes, Link } from "react-router-dom";
import LoginPage from "./components/login_screen/loginPage";


// import logo from "./image/pic.jpg"
// import Button from "./components/main_page/Button";

class App extends React.Component {

    render() {
        return (<div className='app'>
            {/* <Routes>
                <Route pass="/" element={<MainPage />} />
                <Route pass="/login" element={<LoginPage />} />
            </Routes> */}
            <Routes>
                <Route path="/">
                    <Route index element={<MainPage />} />
                    <Route path="login" element={<LoginPage />} />
                </Route>
            </Routes>
            {/* <MainPage/> */}
        </div>)
    }
}

export default App;




