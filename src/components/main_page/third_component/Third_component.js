import React, { Component } from 'react';
import violetTicket from "../../../image/Frame 21-1.png"
import yellowTicket from "../../../image/Frame 22.png"
import blueTicket from "../../../image/Frame 21.png"
import vectors1 from "../../../image/Vector 1.png"
import vectors2 from "../../../image/Vector 2.png"
import { TbPointFilled } from 'react-icons/tb';

class ThirdComponent extends Component {
    // constructor(){
    //     this.state = {
    //         listItems = [];
    //     }
    // }
    listItems = ["Управляй задачами", "Работай в команде", "Создавай колонки и темы", "Составляй цепочки"];
    render() {
        return (
            <div className='third-component-body'>
                <div className='third-component-main-content-wrapper'>
                    <div className='third-component-content-image-wrapper'>
                        <img src = {violetTicket} alt="pic" className='third-component-content-image-violetTicket third-component-content-image'/>
                        <img src = {yellowTicket} alt="pic" className='third-component-content-image-yellowTicket third-component-content-image'/>
                        <img src = {blueTicket} alt="pic" className='third-component-content-image-blueTicket third-component-content-image'/>
                        <img src = {vectors1} alt="pic" className='third-component-content-image-vectors1 third-component-content-image'/>
                        <img src = {vectors2} alt="pic" className='third-component-content-image-vectors2 third-component-content-image'/>
                    </div>
                    <div className='third-component-content-list-wrapper'>
                        {
                            this.listItems.map((elem)=>(
                                <div className='third-component-content-list-item' key={elem}>
                                    <p> <TbPointFilled size={25} />{elem} </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='third-component-header-wrapper'>
                    <p className='third-component-header-text'>
                        Нужна доска для командной работы?
                    </p>
                </div>
            </div>
        );
    }
}

export default ThirdComponent;