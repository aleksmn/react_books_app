import Form from './common/form';



class LoginForm extends Form {

    state = {
        data: { username: '', password: '' },
        errors: {}
    };

    validate = () => {
        const errors = {...this.state.errors};
        const { data } = this.state;

        if (data.username.trim() === '') {
            errors.username = 'Нужно ввести имя пользователя.'
        }

        if (data.password.trim() === '') {
            errors.password = 'Нужно ввести пароль.'
        }

        return  Object.keys(errors).length === 0 ? null : errors;
    }


    validateProperty = input => {
        if (input.name === 'username') {
            const usernameInput = input.value.trim()
            const usernameRegex = /^[А-яA-z0-9_.]+$/
            if (usernameInput === '') return 'Нужно ввести имя пользователя.'
            if (usernameRegex.test(usernameInput) === false) return 'Недопустимый символ'
            if (usernameInput.length < 5) return 'Имя пользователя не менее 5 символов'
            if (usernameInput.length > 30) return 'Имя пользователя не более 30 символов'
            // ...
        }
        if (input.name === 'password') {
            if (input.value.trim() === '') return 'Нужно ввести пароль.'
            if (input.value.trim().length < 12) return 'Пароль должен быть не менее 12 символов'
            // ...
        }
    }

    doSubmit = () => {
        console.log('Отправлено!')
    }

    render() {
        

        return (
            <div className='container' style={{ 'maxWidth': '600px' }}>
                <h1>Логин</h1>

                <form onSubmit={this.handleSubmit}>

                    {this.renderInput("username", 'Имя пользователя')}
                    {this.renderInput("password", 'Пароль', 'password')}
                    
                    {this.renderButton("Отправить")}

                    
                </form>


            </div>
        );
    }
}

export default LoginForm;