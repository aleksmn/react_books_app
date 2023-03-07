import React, { Component } from 'react';
import Input from './common/input';



class LoginForm extends Component {

    state = {
        account: { username: '', password: '' },
        errors: {}
    };

    validate = () => {
        const errors = {};

        const { account } = this.state;

        if (account.username.trim() === '') {
            errors.username = 'Username is required.'
        }

        if (account.password.trim() === '') {
            errors.password = 'Password is required.'
        }

        return  Object.keys(errors).length === 0 ? null : errors;
    }

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        // console.log(errors);
        this.setState({ errors: errors || {} });
        if (errors) return;

        console.log('Отправлено!')
    };

    handleChange = e => {
        const account = { ...this.state.account }
        // account.username = e.currentTarget.value;
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ account });
    };




    render() {
        const { account, errors } = this.state;

        return (
            <div className='container' style={{ 'maxWidth': '600px' }}>
                <h1>Логин</h1>

                <form onSubmit={this.handleSubmit}>
                    <Input
                        name="username"
                        value={account.username}
                        label="Имя пользователя"
                        onChange={this.handleChange}
                        error={errors.username}
                    />
                    <Input
                        name="password"
                        value={account.password}
                        label="Пароль"
                        onChange={this.handleChange}
                        error={errors.password}
                    />

                    <button type="submit" className="btn btn-primary">Отправить</button>
                </form>


            </div>
        );
    }
}

export default LoginForm;