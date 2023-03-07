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
        const { account } = this.state;

        return (
            <div className='container' style={{ 'maxWidth': '600px' }}>
                <h1>Логин</h1>

                <form onSubmit={this.handleSubmit}>
                    <Input
                        name="username"
                        value={account.username}
                        label="Имя пользователя"
                        onChange={this.handleChange}
                    />
                    <Input
                        name="password"
                        value={account.password}
                        label="Пароль"
                        onChange={this.handleChange}
                    />

                    <button type="submit" className="btn btn-primary">Отправить</button>
                </form>


            </div>
        );
    }
}

export default LoginForm;