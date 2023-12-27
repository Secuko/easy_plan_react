import React from "react";

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nameField: '',
            emailField: '',
            passwordField: '',
            nameError: '',
            emailError: '',
            passwodError: '',

        }

        this.nameFieldValidator = this.nameFieldValidator.bind(this);
        this.nameFieldValidator = this.emailFieldValidator.bind(this);
        this.nameFieldValidator = this.passwordFieldValidator.bind(this);
        this.inputFieldsValidation = this.inputFieldsValidation.bind(this);

    }

    errorDict = {
        uncorrectNameErr: "Имя должно быть не короче 5 символов",
        existingNameErr: "Имя уже занято",
        uncorrectEmailFormatErr: "Некорректный формат email",
        uncorrectPasswordFormanErr: "Пароль слишком слабый",
        requiredFieldError: "Обязательное поле",
    }


    nameFieldValidator() {
        if (this.state.nameField === ''){
            this.setState({
                nameError: this.errorDict.requiredFieldError
            }); 
            return;
        }
        if (!(/^(([a-zA-Zа-яА-ЯёЁ]+\s){0,})+[a-zA-Zа-яА-ЯёЁ]+$/.test(this.state.nameField))) {
            this.setState({
                nameError: this.errorDict.uncorrectNameErr
            });
        };
    }

    emailFieldValidator() {
        if (this.state.emailField === ''){
            this.setState({
                emailError: this.errorDict.requiredFieldError
            }); 
            return;
        }
        if (!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/.test(this.state.emailField))) {
            this.setState({
                emailError: this.errorDict.uncorrectEmailFormatErr
            });
        };
    }

    passwordFieldValidator() {
        if (this.state.passwordField === ''){
            this.setState({
                passwodError: this.errorDict.requiredFieldError
            }); 
            return;
        }
        if (!(/(?=.*[0-9])(?=.*[a-z]).{8,}$/.test(this.state.passwordField))) {
            this.setState({
                passwodError: this.errorDict.uncorrectPasswordFormanErr
            });
        };
    }

    inputFieldsValidation() {
        this.nameFieldValidator();
        this.emailFieldValidator();
        this.passwordFieldValidator();
    }

    render() {
        return (
            <div className="login-page-wrapper">
                {/* <p>Login page</p>
                <Link to="/">Главная</Link> */}
                <div className="login-window">
                    <div className="login-window-content-wrapper">
                        <div className="login-window-content-header">
                            Давай создадим аккаунт!
                        </div>
                        <div className="login-window-content-inputs-wrapper">
                            <div className="login-window-input-element">
                                <form className="login-form" method="post">
                                    <input type="text" size="40" placeholder="Никнейм" className="login-form-input" onChange={(event) => {this.setState({ nameField: event.target.value })}} />
                                </form>
                                <div className="login-window-input-error">
                                    <p>{this.state.nameError}</p>
                                </div>
                            </div>
                            <div className="login-window-input-element">
                                <form className="login-form" method="post">
                                    <input type="text" size="40" placeholder="E-mail" className="login-form-input" onChange={event => {this.setState({ emailField: event.target.value })}} />
                                </form>
                                <div className="login-window-input-error">
                                    <p>{this.state.emailError}</p>
                                </div>
                            </div>
                            <div className="login-window-input-element">
                                <form className="login-form" method="post">
                                    <input type="password" size="40" placeholder="Password" className="login-form-input" onChange={event => {this.setState({ passwordField: event.target.value })}} />
                                </form>
                                <div className="login-window-input-error">
                                    <p>{this.state.passwodError}</p>
                                </div>
                            </div>
                        </div>
                        <div className="login-window-content-button">
                            <p className="login-window-content-button-text" onClick={this.inputFieldsValidation}>Создать аккаунт</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default LoginPage;


