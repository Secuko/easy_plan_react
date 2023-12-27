import React from "react";
import Header from "./header/Header";
import Divider from "./Divider";
import FirstComponent from "./first_component/FirstComponent";
import SecondComponent from "./second_component/SecondComponent";
import ThirdComponent from "./third_component/Third_component";
import FourthComponent from "./fourth_component/Fourth_component";

class MainPage extends React.Component {

    render() {
        return (<div className='app'>
            <Header />
            <Divider /> 
            <FirstComponent />
            <Divider />
            <SecondComponent />
            <Divider />
            <ThirdComponent />
            <Divider />
            <FourthComponent/>
        </div>)
    }
}

export default MainPage