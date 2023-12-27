import React from "react";


class ActionItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            listIsOpen: false,
            listOfItems: props.listOfChildItems
        }

        this.changeStateOfList = this.changeStateOfList.bind(this)
    }

    changeStateOfList() {
        this.setState({ listIsOpen: !this.state.listIsOpen });
        console.log(this.state.listIsOpen);
    }

    render() {
        return (
            <div className="action-panel-item">
                <p className="action-panel-item-text" onClick={this.changeStateOfList}>{this.props.title}</p>
                {this.state.listIsOpen && (
                    <div className="dropdown-menu">
                        <div>
                            {this.state.listOfItems.map((elem)=>(
                                <div className="dropdownmenu-item">{elem}</div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        )
    }

}

export default ActionItem


//tiny png