import React, { Component } from 'react';
import Input from './common/input';
import Joi from 'joi-browser'



class LoginForm extends Component {

    state = {
        account: { username: '', password: '' },
        errors: {}
    };

    schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required()
    });

    validate = () => {
        const result = Joi.validate(this.state.account, this.schema, {abortEarly: false});

        console.log(result)

        const errors = {};

        const { account } = this.state;

        if (account.username.trim() === '') {
            errors.username = 'Нужно ввести имя пользователя.'
        }

        if (account.password.trim() === '') {
            errors.password = 'Нужно ввести пароль.'
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

    validateProperty = input => {

        if (input.name === 'username') {
            if (input.value.trim() === '') return 'Нужно ввести имя пользователя.'
            // ...
        }
        if (input.name === 'password') {
            if (input.value.trim() === '') return 'Нужно ввести пароль.'
            // ...
        }

    }

    handleChange = e => {

        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(e.currentTarget);

        if (errorMessage) errors[e.currentTarget.name] = errorMessage;
        else delete errors[e.currentTarget.name]

        const account = { ...this.state.account }
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ account, errors });
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
                        type="text"
                        label="Имя пользователя"
                        onChange={this.handleChange}
                        error={errors.username}
                    />
                    <Input
                        name="password"
                        value={account.password}
                        type="password"
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