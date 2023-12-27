import React, { Component } from 'react';
import { TbPointFilled } from 'react-icons/tb';
import pin from '../../../image/pin.png'

class FirstComponent extends Component {
    items = [
        {
            id: 1,
            header: "Планируй",
            subItemsList: [
                "Создавай задачи",
                "Устанавливай сроки",
                "Определяй приоритет",
            ],
            color: 'rgba(245, 232, 116, 1)',
        },
        {
            id: 2,
            header: "Отслеживай",
            subItemsList: [
                "Следи за временем",
                "Прогресс-бары задач",
                "Получай уведомления",
            ],
            color: 'rgba(116, 222, 245, 1)',
        },
        {
            id: 3,
            header: "Завершай",
            subItemsList: [
                "Статистика",
                "История задачи",
                "Возвращайся к задаче",
            ],
            color: 'rgba(226, 213, 254, 1)',
        }
    ];
    render() {
        return (
            <div className="first-component-body">
                <div className='tickets-wrapper'>
                {this.items.map((item) => (
                    <div className="first-component-element" key={item.id} style={{ 'backgroundColor': item.color }}>
                        <div className="first-component-image">
                            <img src={pin} alt='pin' />
                        </div>
                        <div className="first-component-element-header">
                            <p className="first-component-element-header-text">{item.header}</p>
                        </div>
                        <div className="first-component-element-list">
                            {item.subItemsList.map((elem) => (
                                <div className="first-component-element-list-item">
                                    <p className="first-component-element-list-item-text"> <TbPointFilled size={19} />{elem} </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                </div>
                <div className="first-component-header">
                    <p className="first-component-header-text">Работаешь один?</p>
                </div>
            </div>
        );
    }
}

export default FirstComponent;