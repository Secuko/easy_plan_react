import React, { Component } from 'react';
import picture from "../../../image/main_screen_fourth_component.png"
import { Link } from 'react-router-dom';

class FourthComponent extends Component {
    render() {
        return (
            <div className='fourth-component-body'>
                <div className='fourth-component-content-image-wrapper'>
                    <img src={picture} alt='meeting' className='fourth-component-content-image' />
                </div>
                <div className='fourth-component-content-rigth-wrapper'>
                    <div className='fourth-component-content-rigth-text-wrapper'>
                        <p className='fourth-component-content-rigth-text'>
                            Попробуй Easy Plan прямо сейчас
                        </p>
                    </div>
                    <div className='fourth-component-content-rigth-button'>
                        <Link className='fourth-component-content-rigth-button-text' to="login">
                            Зарегистрироваться
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default FourthComponent;