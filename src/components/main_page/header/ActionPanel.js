import React, { Component } from 'react';
import ActionItem from './ActionItem';

class ActionPanel extends Component {
    panelItems = [
        {   
            id: 1,
            title: "Продукт",
            listOfChildItems: ["О продукте","Обучение","Видеокурс"],
        },
        {
            id: 2,
            title: "Тарифы",
            listOfChildItems: ["Free","Standart","No limits"],
        },
        {   
            id: 3,
            title: "Компания",
            listOfChildItems: ["Лицензия","Сотрудники",],
        },
    ];
    render() {
        return (
            <div className='action-panel-wrapper'>
                {this.panelItems.map((item) => (
                    <ActionItem title={item.title} listOfChildItems={item.listOfChildItems} key={item.id}/>
                ))}
            </div>
        );
    }
}

export default ActionPanel;