import React, { Component } from 'react';


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
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Имя пользователя</label>
                        <input
                            value={this.state.account.username}
                            onChange={this.handleChange}
                            id="username"
                            name="username"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Пароль</label>
                        <input
                            value={this.state.account.password}
                            onChange={this.handleChange}
                            id="password"
                            name="password"
                            type="password"
                            className="form-control"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Отправить</button>
                </form>


            </div>
        );
    }
}

export default LoginForm;