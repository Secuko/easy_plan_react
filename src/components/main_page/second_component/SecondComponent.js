import React, { Component } from 'react';
import picture from "../../../image/main_screen_second_component.png"

class SecondComponent extends Component {
    render() {
        return (
            <div className='second-component-body'>
                <div className='second-component-content-wrapper'>
                    <div className='second-component-content-image-wrapper'>
                        <img src={picture} alt='meeting' className='second-component-content-image'/>
                    </div>
                    <div className='second-component-content-text-wrapper'>
                        <p className='second-component-content-text'> 
                            Easy Plan - единое пространство управления командными и индивидуальными проектами
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SecondComponent;