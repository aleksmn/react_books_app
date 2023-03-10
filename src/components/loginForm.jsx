import React, { Component } from 'react';
import Input from './common/input';



class LoginForm extends Component {

    state = {
        account: { username: '', password: '' }
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log('Отправлено!')
    };

    handleChange = e => {
        const account = { ...this.state.account }
        // account.username = e.currentTarget.value;
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ account });
    };




    render() {
        return (
            <div className='container' style={{ 'maxWidth': '600px' }}>
                <h1>Логин</h1>

                <form onSubmit={this.handleSubmit}>
                    <Input
                        name="username"
                        value={this.state.account.username}
                        label="Имя пользователя"
                        onChange={this.handleChange}
                        type='text'
                    />
                    <Input
                        name="password"
                        value={this.state.account.password}
                        label="Пароль"
                        onChange={this.handleChange}
                        type='password'
                    />

                    <button type="submit" className="btn btn-primary">Отправить</button>
                </form>


            </div>
        );
    }
}

export default LoginForm;